import { client } from "@/types/clients";
import { JobFilterOptions } from "@/types/jobFilterOptions";

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

export const JOB_FILTER_OPTIONS: JobFilterOptions[] = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
];
