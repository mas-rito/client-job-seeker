// @flow
import { Slack } from "lucide-react";
import Link from "next/link";
import * as React from "react";
type Props = {
  title: string;
  total: number;
  href: string;
};
export function CardCategory({ title, total, href }: Props) {
  return (
    <Link
      href={href}
      className="block border-2 border-gray-200 p-6 group hover:bg-primary hover:border-primary transition-colors"
    >
      <Slack size={40} className="text-primary group-hover:text-white mb-6" />
      <h2 className="text-xl font-semibold mb-1 group-hover:text-white">
        {title}
      </h2>
      <p className="text-muted-foreground group-hover:text-white">
        {total} jobs available
      </p>
    </Link>
  );
}
