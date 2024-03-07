"use client";
import { filterSchema } from "@/lib/formSchema/filterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { Container } from "@/components/atoms/container";
import { TitlePage } from "@/components/molecules/titlePage";
import { FormSearch } from "@/components/organisms/formSearch";
import { Filter } from "@/components/layouts/Filters";
import { INDUSTRY_OPTIONS } from "@/constants";
import { Company } from "@/types/company";

const dataDammy: Company[] = [
  {
    image: "/images/company.png",
    name: "Google",
    desc: "Google is an American multinational technology company that specializes in Internet-related services and products. It is considered one of the most valuable companies in the world.",
    category: "Technology",
    jobs: 300,
  },
  {
    image: "/images/company.png",
    name: "Facebook",
    desc: "Facebook is an American online social media and social networking service based in Menlo Park, California. Its products include 'Facebook', 'Messenger', 'Instagram', and 'WeChat'.",
    category: "Technology",
    jobs: 300,
  },
  {
    image: "/images/company2.png",
    name: "CodeElder",
    desc: "CodeElder is a digital agency that provides web and mobile app development services.",
    category: "Technology",
    jobs: 300,
  },
  {
    image: "/images/company2.png",
    name: "CodeElder",
    desc: "CodeElder is a digital agency that provides web and mobile app development services.",
    category: "Technology",
    jobs: 300,
  },
  {
    image: "/images/company2.png",
    name: "CodeElder",
    desc: "CodeElder is a digital agency that provides web and mobile app development services.",
    category: "Technology",
    jobs: 300,
  },
];

export default function FindCompanies() {
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
            title="dream companies"
            subTitle="Find your dream place to work at companies like Google, Facebook, and Codeelder"
          />
          <div className="w-fit mx-auto mt-8">
            <FormSearch />
          </div>
        </Container>
      </div>
      <Filter
        type="companies"
        form={form}
        onSubmit={handleSubmit}
        data={dataDammy}
        items={INDUSTRY_OPTIONS}
      />
    </>
  );
}
