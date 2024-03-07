export type Job = {
  roles: string;
  image: string;
  location: string;
  jobType: string;
  companyCategory: string;
  href?: string;
};

export type JobFilter = {
  id: string;
  applicants: number;
  skills: string[];
  needs: number;
} & Job;
