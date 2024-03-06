// @flow
import { MoveRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
type Props = {
  title: string;
  span: string;
  link: string;
  className?: string;
};
export function TitleSection({ title, span, link, className }: Props) {
  return (
    <div className={`flex flex-row justify-between items-center ${className}`}>
      <h1 className="text-5xl font-semibold">
        {title} <span className="text-primary">{span}</span>
      </h1>

      <Link
        href={link}
        className="flex flex-row items-center gap-3 text-primary hover:gap-6 transition-all"
      >
        Show all jobs
        <MoveRight size={30} />
      </Link>
    </div>
  );
}
