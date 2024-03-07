// @flow
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Badge } from "../ui/badge";
import { Dot } from "lucide-react";
import { Job } from "@/types/job";
type Props = {
  desc: string;
} & Job;
export function CardJob({
  image,
  jobType,
  roles,
  companyCategory,
  location,
  desc,
  href,
}: Props) {
  return (
    <Link href={href} className="block border-2 border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <Image src={image} alt="logo" width={50} height={50} />
        <Badge variant="secondary" className="py-1 px-2">
          {jobType}
        </Badge>
      </div>
      <div>
        <h2 className="text-xl font-semibold">{roles}</h2>
        <div className="flex items-center text-muted-foreground">
          <p className="text-xs">{companyCategory}</p>
          <Dot />
          <p className="text-xs">{location}</p>
        </div>

        <p className="text-muted-foreground line-clamp-2 mt-3 mb-4">{desc}</p>

        <div className="flex gap-3">
          <Badge className="py-1 px-2">Javascript</Badge>
          <Badge className="py-1 px-2">React</Badge>
          <Badge className="py-1 px-2">Next.js</Badge>
        </div>
      </div>
    </Link>
  );
}
