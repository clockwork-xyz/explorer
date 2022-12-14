import Head from "next/head";
import { FC, ReactNode } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Header from "../common/Header";
import { Footer } from "components/common/Footer/Footer";
import { SearchBar } from "components/common/SearchBar";

type SiteLayoutProps = {
  title?: string;
  children: ReactNode;
};

export const SiteLayout: FC<SiteLayoutProps> = ({
  title,
  children,
}: SiteLayoutProps) => {
  const { connected } = useWallet();
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Clockwork Factory` : `Clockwork Factory`}
        </title>
      </Head>
      {connected ? (
        <div className="flex flex-col h-screen">
          <div className="w-full h-screen overflow-y-auto flex flex-col space-y-4 justify-between">
            <>
              <div className="w-full mx-auto">
                <Header />
                <div className="max-w-5xl w-full mx-auto">
                  <SearchBar />
                  <div className="px-4">{children}</div>
                </div>
              </div>
              <Footer />
            </>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export const getLayout = (page: React.ReactNode, title?: string) => (
  <SiteLayout title={title}>{page}</SiteLayout>
);
