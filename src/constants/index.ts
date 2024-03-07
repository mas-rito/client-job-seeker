import { client } from "@/types/clients";
import { FilterOptions } from "@/types/jobFilterOptions";

export const clients: client[] = [
  {
    url: "/images/jobox.png",
    name: "Jobox",
  },
  {
    url: "/images/dsign.png",
    name: "Dsign",
  },
  {
    url: "/images/wave.png",
    name: "Wave",
  },
  {
    url: "/images/twins.png",
    name: "Twins",
  },
  {
    url: "/images/bubles.png",
    name: "Bubles",
  },
];

export const LOCATION_OPTIONS: string[] = [
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Thailand",
  "Vietnam",
];

export const JOB_FILTER_OPTIONS: FilterOptions[] = [
  {
    id: "latest",
    label: "Latest",
  },
  {
    id: "popular",
    label: "Popular",
  },
  {
    id: "salary",
    label: "Salary",
  },
  {
    id: "fullTime",
    label: "Full Time",
  },
  {
    id: "partTime",
    label: "Part Time",
  },
  {
    id: "internship",
    label: "Internship",
  },
];
export const INDUSTRY_OPTIONS: FilterOptions[] = [
  {
    id: "technology",
    label: "Technology",
  },
  {
    id: "advertising",
    label: "Advertising",
  },
  {
    id: "business",
    label: "Business",
  },
  {
    id: "blockchain",
    label: "Blockchain",
  },
  {
    id: "cloud",
    label: "Cloud",
  },
  {
    id: "fintech",
    label: "Fintech",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "consumerTech",
    label: "Consumer Tech",
  },
  {
    id: "healthcare",
    label: "Healthcare",
  },
  {
    id: "gaming",
    label: "Gaming",
  },
  {
    id: "foodBeverages",
    label: "Food & Beverages",
  },
  {
    id: "hosting",
    label: "Hosting",
  },
];
