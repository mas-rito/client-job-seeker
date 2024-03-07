import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { filterSchema } from "@/lib/formSchema/filterSchema";
import { JobFilterOptions } from "@/types/jobFilterOptions";
import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { CheckBox } from "./checkBox";
import { Separator } from "@/components/ui/separator";
import { CardJobFilter } from "@/components/molecules/cardJobFilter";
import { JobFilter } from "@/types/job";
type Props = {
  type: string;
  name: string;
  form: UseFormReturn<z.infer<typeof filterSchema | any>>;
  onSubmit: (data: z.infer<typeof filterSchema>) => Promise<void>;
  data: JobFilter[];
  items: JobFilterOptions[];
};
export function Filter({ type, name, form, onSubmit, data, items }: Props) {
  return (
    <Container className="flex flex-row items-start mt-10">
      <div className="w-1/5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CheckBox name={name} items={items} form={form} />
            <Separator />
            <Button type="submit" className="w-full">
              Apply Filter
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-4/5 ps-6">
        <h2 className="text-end text-3xl font-semibold mb-2">All {type}</h2>
        <p className="text-end text-muted-foreground">Showing 73 results</p>

        <div className="flex flex-col gap-2 mt-4">
          {type === "jobs"
            ? data.map((item: JobFilter) => (
                <CardJobFilter key={item.id} {...item} href="/" />
              ))
            : data.map((item: JobFilter) => <div key={item.id}>item</div>)}
        </div>
      </div>
    </Container>
  );
}
