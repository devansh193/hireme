"use client";
import { useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { JobDisplay, JobLoading } from "./job-display";
import { Job } from "@prisma/client";
import { fetchActiveJobs } from "@/actions/job";
import { useRouter } from "next/navigation";
import { useGetJobs } from "@/features/jobs/actions/use-get-jobs";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "./ui/card";

export const ActiveJobs = () => {
  const { isLoading, data: jobs } = useGetJobs();
  if (isLoading) {
    return (
      <main className="max-w-full mx-2">
        <div className="flex">
          <div className="w-full">
            <JobLoading />
          </div>
        </div>
      </main>
    );
  }
  return (
    <div className="flex">
      <CardWrapper title={"Active Jobs"}>
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
      </CardWrapper>
    </div>
  );
};
