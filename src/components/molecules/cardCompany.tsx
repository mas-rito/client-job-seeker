// @flow
import { Company } from "@/types/company";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Badge } from "../ui/badge";
type Props = Company;
export function CardCompany({ image, name, desc, category, jobs }: Props) {
  return (
    <Link href={"/"} className="block border-2 border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <Image src={image} alt="logo" width={50} height={50} />
        <Badge variant="secondary" className="py-1 px-2">
          {`${jobs} Jobs`}
        </Badge>
      </div>
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-muted-foreground text-sm line-clamp-3 mt-3 mb-4">
          {desc}
        </p>

        <div className="flex gap-3">
          <Badge className="py-1 px-2">{category}</Badge>
        </div>
      </div>
    </Link>
  );
}
