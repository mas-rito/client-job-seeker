// @flow
import { MapPin, Search } from "lucide-react";
import * as React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
type Props = {};
export function FormSearch(props: Props) {
  return (
    <>
      <div className="relative z-10 inline-flex gap-x-4 bg-white mt-6 p-5 rounded-md shadow-md">
        <div className="inline-flex items-center gap-x-3">
          <Search size={30} className="text-gray-700" />
          <Input className="w-80" placeholder="Job title or keyword" />
        </div>
        <div className="inline-flex items-center gap-x-3">
          <MapPin size={30} className="text-gray-700" />
          <Select>
            <SelectTrigger className="w-80">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button size={"lg"}>Search my job</Button>
      </div>
      <p className="text-muted-foreground mt-4">
        Popular: UI Designer, Ux Researcher, Frontend, Admin ...
      </p>
    </>
  );
}
