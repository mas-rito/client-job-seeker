"use client";
import { filterSchema } from "@/lib/formSchema/filterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Container } from "@/components/atoms/container";
import { TitlePage } from "@/components/molecules/titlePage";
import { FormSearch } from "@/components/organisms/formSearch";
import { Filter } from "@/components/layouts/Filters";
import { JOB_FILTER_OPTIONS } from "@/constants";
import { JobFilter } from "@/types/job";

const dataDammy: JobFilter[] = [
  {
    id: "1",
    roles: "Frontend Developer",
    companyCategory: "Technology",
    location: "Indonesia, Jakarta",
    image: "/images/company.png",
    jobType: "Full Time",
    skills: ["React", "Javascript", "Typescript"],
    applicants: 4,
    needs: 10,
  },
];

export default function FindJobs() {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const handleSubmit = async (val: z.infer<typeof filterSchema>) => {
    console.log(val);
  };

  return (
    <>
      <div className="bg-secondary pt-14 pb-20">
        <Container className="w-full">
          <TitlePage
            title="dream job"
            subTitle="Find your next career at companies like Google, Facebook, and Codeelder"
          />
          <div className="w-fit mx-auto mt-8">
            <FormSearch />
          </div>
        </Container>
      </div>
      <Filter
        type="jobs"
        name="categories"
        form={form}
        onSubmit={handleSubmit}
        data={dataDammy}
        items={JOB_FILTER_OPTIONS}
      />
    </>
  );
}
