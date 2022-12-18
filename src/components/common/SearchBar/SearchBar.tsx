import { SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { FC, FormEvent } from "react";
import { useSearch } from "contexts/SearchContext";

import * as anchor from "@project-serum/anchor";

type SearchBarProps = {};

export const tryDecode = (program: anchor.Program<any>, data: any) => {
  try {
    const accountTypes = Object.keys(program.account);
    for (let index = 0; index < accountTypes.length; index++) {
      const accountType = accountTypes[index];

      try {
        const decoded = program.coder.accounts.decode(accountType, data!);
        return { account: decoded, accountType };
      } catch (error) {
        console.error(error);
      }
    }

    // doesn't match any idl account
    return { account: data, accountType: "Account" };
  } catch (error) {
    console.error(error);
  }
};

export const SearchBar: FC<SearchBarProps> = ({}: SearchBarProps) => {
  const router = useRouter();

  const { data, error, loading, address, setAddress } = useSearch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (address.length === 0) {
      return;
    }

    // NOTE: If not deleted, extra ?address=xyz is added
    delete router.query.address;

    router.push({ pathname: `/address/${address}`, query: router.query });
  };

  return (
    <div className="flex flex-col space-y-10 items-stretch mb-[30px] px-4">
      <form
        className="flex items-center space-x-4 rounded-lg border text-[#979797] border-[#E7EAED] dark:border-[#4F4F4F]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Search for threads and accounts"
          className="px-3 py-2 w-full bg-transparent focus:outline-none text-[#979797] flex-1"
          data-testid="search-thread-input"
        />
        <button type="submit" className="px-4 py-2">
          <SearchIcon className="h-5 w-5 text-[#979797]" />
        </button>
      </form>
      {/* {error && <p>{error.message}</p>} */}
    </div>
  );
};
