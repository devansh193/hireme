import JobCard from "@/components/JobCard";
import Sidebar from "@/components/Sidebar";
import { JobDisplay } from "@/components/job-display";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";

const JobsPage = async () => {
  const allJobs = await prisma.job.findMany({
    where: {
      state: "ACTIVE",
    },
  });

  return (
    <section className="relative w-full h-fit flex gap-2 flex-grow p-2">
      <section className="w-full h-fit flex flex-col gap-8 rounded-md py-4 px-6">
        <div className="flex flex-col gap-1">
          <h3 className="lg:text-5xl text-gray-900 tracking-tight font-semibold">
            All Developer Jobs
          </h3>
        </div>
        <div
          className={cn(
            "jobs flex flex-col max-h-[420px] gap-3 overflow-y-scroll",
            {
              "h-[420px] flex justify-center items-center":
                allJobs.length === 0,
            }
          )}
        >
          {allJobs &&
            allJobs.map((job) => {
              return <JobDisplay key={job.id} job={job} />;
            })}
          {allJobs.length === 0 ? (
            <h3 className="text-2xl font-semibold text-gray-800">
              No Jobs Found!
            </h3>
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default JobsPage;
