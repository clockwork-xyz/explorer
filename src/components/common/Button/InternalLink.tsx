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
      className={`border border-black-100 dark:border-white text-sm text-black-100 dark:text-white align-middle justify-center pt-5 pb-5 pr-10 pl-10 ${className}`}
    >
      {children}
    </Link>
  );
}
