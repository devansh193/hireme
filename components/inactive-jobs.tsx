"use client";
import { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { JobDisplay, JobLoading } from "./job-display";
import { Job } from "@prisma/client";
import { fetchInActiveJobs } from "@/actions/job";
import { useRouter } from "next/navigation";

export const InActiveJobs = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      //@ts-ignore
      const response = await fetchInActiveJobs();
      if (response.status === "success") {
        //@ts-ignore
        setJobs(response.data);
        router.refresh();
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  if (loading) {
    <div>
      <CardWrapper cols={1} title={"Unpublished jobs"}>
        <JobLoading />
      </CardWrapper>
    </div>;
  }

  return (
    <div>
      <CardWrapper cols={1} title={"Unpublished jobs"}>
        {jobs.map((job) => (
          <JobDisplay key={job.id} job={job} />
        ))}
      </CardWrapper>
    </div>
  );
};
