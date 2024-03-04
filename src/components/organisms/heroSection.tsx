// @flow
import Image from "next/image";
import * as React from "react";
import { FormSearch } from "./formSearch";
type Props = {};
export function HeroSection({}: Props) {
  return (
    <div className="flex flex-row justify-between items-center flex-wrap">
      <div className="w-1/2">
        <h1 className="text-7xl font-semibold text-slate-600 w-max relative mb-2">
          Discover <br />
          more than <br />
          <span className="text-primary">5000+ Jobs</span>
        </h1>
        <Image
          src={"/images/pattern2.png"}
          alt="pattern"
          width={400}
          height={30}
        />
        <p className="text-muted-foreground text-lg mt-5">
          Great platform for the job seeker that searching for new career
          heights and passionate about stratups.
        </p>
        <FormSearch />
      </div>

      <div className="block mt-2">
        <Image
          src={"/images/hero.png"}
          alt="hero"
          width={500}
          height={700}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
