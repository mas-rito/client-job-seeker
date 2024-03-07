// @flow
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Job } from "@/types/job";
type Props = {
  skills: string[];
} & Job;
export function CardLatesJob({
  image,
  roles,
  companyCategory,
  location,
  href,
  jobType,
  skills,
}: Props) {
  return (
    <Link href={href} className="flex gap-x-3 border-2 border-gray-200 p-6">
      <div className="w-[60px]">
        <Image src={image} alt="logo" width={60} height={60} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{roles}</h2>
        <div className="flex items-center text-muted-foreground mb-2">
          <p className="text-xs">{companyCategory}</p>
          <Dot />
          <p className="text-xs">{location}</p>
        </div>
        <div className="h-5 inline-flex gap-x-2 items-center">
          <Badge variant={"secondary"}>{jobType}</Badge>
          <Separator orientation="vertical" />
          {skills.map((skill: string, i: number) => (
            <Badge
              key={i}
              variant="outline"
              className="rounded border-primary bg-primary/5 text-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
