// @flow
import { Dot } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { JobFilter } from "@/types/job";
import Link from "next/link";
type Props = JobFilter;
export function CardJobFilter({
  roles,
  image,
  companyCategory,
  location,
  jobType,
  skills,
  applicants,
  needs,
}: Props) {
  const progress = (applicants / needs) * 100;
  return (
    <>
      <div className="flex flex-row justify-between items-start p-4">
        <div className="flex flex-row items-center gap-x-4">
          <Image src={image} alt="logo" width={64} height={64} />
          <Separator orientation="vertical" className="h-14 my-auto" />
          <div>
            <Link
              href="#"
              className="text-xl font-semibold hover:text-primary transition-colors"
            >
              {roles}
            </Link>
            <div className="flex flex-row items-center text-muted-foreground mb-2">
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
        </div>
        <div className="space-y-2.5">
          <Button className="w-full">Apply</Button>
          <Progress value={progress} />
          <p className="text-sm">
            {applicants} applied{" "}
            <span className="text-muted-foreground">of {needs} capacity</span>
          </p>
        </div>
      </div>
      <Separator className="bg-border/50" />
    </>
  );
}
