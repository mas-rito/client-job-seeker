import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { filterSchema } from "@/lib/formSchema/filterSchema";
import { JobFilterOptions } from "@/types/jobFilterOptions";
import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
type Props = {
  name: string;
  items: JobFilterOptions[];
  form: UseFormReturn<z.infer<typeof filterSchema | any>>;
};
export function CheckBox({ name, form, items }: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="space-y-3">
          <div className="mb-4">
            <FormLabel className="text-2xl font-semibold">Category</FormLabel>
            <FormDescription>
              Select the categories you are looking for.
            </FormDescription>
          </div>
          {items.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.id
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
