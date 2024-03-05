// @flow
import * as React from "react";
import { Container } from "../atoms/container";
import { TitleSection } from "../molecules/titleSection";
import { CardJob } from "../molecules/cardJob";

export function FeaturedJobsSection() {
  return (
    <div>
      <TitleSection
        title="Featured"
        span="jobs"
        titleLink="Show all jobs"
        link="/"
        className="mb-14"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="col-span-1">
            <CardJob
              company="/images/company.png"
              jobType="Full Time"
              jobTitle="Frontend Developer"
              companyCategory="Technology"
              location="Indonesia, Pontianak"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde esse
          optio totam error consequatur nihil ipsa quae facere repellat impedit
          molestiae perferendis voluptas voluptatibus ducimus, id reiciendis
          recusandae delectus eaque?"
              href="/"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
