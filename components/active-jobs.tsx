"use client";
import { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { JobDisplay, JobLoading } from "./job-display";
import { Job } from "@prisma/client";
import { fetchActiveJobs } from "@/actions/job";
import { useRouter } from "next/navigation";

export const ActiveJobs = () => {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      //@ts-ignore
      const response = await fetchActiveJobs({});
      if (response.status === "success") {
        //@ts-ignore
        setJobs(response.data);
        router.refresh();
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);
  if(loading){
    return(
      <main className="max-w-full mx-2">
        <div className="flex">
          <div className="w-full">
            <JobLoading />
          </div>
        </div>
      </main>
    )
  }
  return (
    <div className="flex">
      <CardWrapper title={"Active Jobs"}>
        {jobs.map((job) => (
          <JobDisplay key={job.id} job={job} />
        ))}
      </CardWrapper>
    </div>
  );
};
