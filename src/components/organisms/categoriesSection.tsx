import * as React from "react";
import { TitleSection } from "../molecules/titleSection";
import { CardCategory } from "../molecules/cardCategory";

export function CategoriesSection() {
  return (
    <div>
      <TitleSection
        title="Explore by"
        span="category"
        link="/"
        className="mb-14"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item: number, i: number) => (
          <div key={i} className="col-span-1">
            <CardCategory title="Design" total={100} href="#" />
          </div>
        ))}
      </div>
    </div>
  );
}
