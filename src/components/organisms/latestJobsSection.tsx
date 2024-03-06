import * as React from "react";
import { TitleSection } from "../molecules/titleSection";
import { CardLatesJob } from "../molecules/cardLatesJob";

export function LatestJobsSection() {
  return (
    <div>
      <TitleSection title="Latest" span="jobs" link="/" className="mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="col-span-1">
            <CardLatesJob
              image="/images/company2.png"
              jobTitle="UI/UX Designer"
              companyCategory="Design"
              location="Indonesia, Jakarta"
              href="/"
              jobType="Full Time"
              skills={["Figma", "After Effects"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
