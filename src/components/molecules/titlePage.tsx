// @flow
import Image from "next/image";
import * as React from "react";
type Props = {
  title: string;
  subTitle: string;
};
export function TitlePage({ title, subTitle }: Props) {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-x-2 text-5xl font-semibold">
        <h1>Find your</h1>
        <span className="relative text-primary">
          {title}
          <div className="absolute top-12 w-64 h-8">
            <Image
              src={"/images/pattern2.png"}
              alt="pattern"
              fill
              objectFit="contain"
            />
          </div>
        </span>
      </div>
      <p className="text-center text-muted-foreground mt-12">{subTitle}</p>
    </>
  );
}
