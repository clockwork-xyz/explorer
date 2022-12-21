import React from "react";
import Link from "next/link";

type InternalLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function InternalLink({
  href,
  className = "",
  children,
}: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={`bg-black-100 dark:bg-white text-sm dark:text-black-100 text-white align-middle justify-center py-3 px-10 ${className}`}
    >
      {children}
    </Link>
  );
}
