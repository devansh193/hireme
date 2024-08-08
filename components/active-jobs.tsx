"use client";
import { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { JobDisplay, JobLoading } from "./job-display";
import { Job } from "@prisma/client";
import { fetchActiveJobs } from "@/actions/job";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

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
      <div className="flex">
        <CardWrapper cols={1} title={"Publisher jobs"}>
          <JobLoading/>
        </CardWrapper>
      </div>
    )
  }

  return (
    <div className="flex">
      <CardWrapper cols={1} title={"Published jobs"}>
        {jobs.map((job) => (
          <JobDisplay key={job.id} job={job} />
        ))}
      </CardWrapper>
    </div>
  );
};
