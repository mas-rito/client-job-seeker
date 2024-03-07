import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { filterSchema } from "@/lib/formSchema/filterSchema";
import { FilterOptions } from "@/types/jobFilterOptions";
import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { CheckBox } from "./checkBox";
import { Separator } from "@/components/ui/separator";
import { CardJobFilter } from "@/components/molecules/cardJobFilter";
import { JobFilter } from "@/types/job";
import { CardCompany } from "@/components/molecules/cardCompany";
import { Company } from "@/types/company";

type Props = {
  type: string;
  form: UseFormReturn<z.infer<typeof filterSchema>>;
  onSubmit: (data: z.infer<typeof filterSchema>) => Promise<void>;
  data: any;
  items: FilterOptions[];
};
export function Filter({ type, form, onSubmit, data, items }: Props) {
  return (
    <Container className="flex flex-row items-start mt-10">
      <div className="w-1/5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CheckBox items={items} form={form} />
            <Separator />
            <Button type="submit" className="w-full">
              Apply Filter
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-4/5 ps-6">
        <h2 className="text-end text-3xl font-semibold mb-2">All {type}</h2>
        <p className="text-end text-muted-foreground">
          Showing {data.length} results
        </p>
        {type === "jobs" ? (
          <div className="flex flex-col gap-2 mt-4">
            {data.map((item: JobFilter) => (
              <CardJobFilter key={item.id} {...item} href="/" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {data.map((item: Company, i: number) => (
              <div key={i} className="col-span-1">
                <CardCompany {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
