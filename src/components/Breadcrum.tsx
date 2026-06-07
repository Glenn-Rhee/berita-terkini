import ChevronRight from "@/icon/ChevronRight";
import HouseIcon from "@/icon/HouseIcon";
import { cn } from "@/lib/cn";
import Link from "next/link";
import React from "react";

export interface BreadcrumProps {
  dataLinks: {
    href: string;
    title: string;
  }[];
}

export default function Breadcrum(props: BreadcrumProps) {
  const { dataLinks } = props;
  return (
    <div className="flex gap-x-3">
      <button className="cursor-pointer">
        <HouseIcon />
      </button>
      {dataLinks.map((data, i) => (
        <React.Fragment key={data.href}>
          {i === dataLinks.length - 1 ? (
            <span className="text-lg font-inter text-gray-1 cursor-default">
              {data.title}
            </span>
          ) : (
            <Link
              href={data.href}
              className={cn("text-lg font-inter text-gray-1 hover:underline")}
            >
              {data.title}
            </Link>
          )}
          {i === dataLinks.length - 1 ? null : (
            <button className="cursor-pointer">
              <ChevronRight />
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
