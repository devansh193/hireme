"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "@/components/Sidebar";
import { Job } from "@prisma/client";
import { JobDisplay, JobLoading } from "@/components/job-display";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetJobs } from "@/features/jobs/actions/use-get-jobs";
import { GetJobSchemaType } from "@/zod/job";

interface Filters {
  title: string;
  companyName: string;
  location: string;
  currency: string;
  salRange: [number, number];
}

const JobsPage = () => {
  const [filters, setFilters] = useState<Filters>({
    title: "",
    companyName: "",
    location: "",
    currency: "",
    salRange: [0, 1000000],
  });

  const { isLoading, data: jobs } = useGetJobs();

  if (isLoading) {
    return (
      <main className="max-w-full mx-2">
        <div className="flex">
          <div className="w-64 pr-4 shrink-0 hidden md:block mt-4"></div>
          <div className="w-full">
            <JobLoading />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-full mx-2">
      <div className="flex">
        <div className="w-64 pr-4 shrink-0 hidden md:block mt-4"></div>
        <div className="w-full">
          {jobs &&
            jobs.map((job: Job) => {
              return <JobDisplay key={job.id} job={job} />;
            })}
          {jobs?.length === 0 ? (
            <Card className="w-full h-screen mt-4">
              <CardHeader>
                <CardTitle>
                  <span>No published job</span>
                </CardTitle>
              </CardHeader>
            </Card>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default JobsPage;
