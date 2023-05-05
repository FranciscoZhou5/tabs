"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import classNames from "classnames";

export default function TabsNav() {
  const pathname = usePathname();

  const tabs = [
    { url: "/projects", label: "All" },
    { url: "/projects/web-designer", label: "Web Designer" },
    { url: "/projects/backend-developer", label: "Backend Developer" },
  ];

  return (
    <nav className="w-full flex justify-center pt-16 space-x-4">
      {tabs.map(({ label, url }) => (
        <Link href={url} key={Math.random()} className={classNames(pathname !== url && "text-gray-400")}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
