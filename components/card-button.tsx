"use client";
import { useSession } from "next-auth/react";
import { Job } from "@prisma/client";
import { EditJobModal } from "./EditJobModal";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useDeleteJob } from "@/features/jobs/actions/use-delete-job";

type CardButtonProps = {
  job: Job;
};

export const CardButton = ({ job }: CardButtonProps) => {
  const deleteMutation = useDeleteJob(job.id);
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(pathname);
  const handleDelete = async ()=>{
    deleteMutation.mutate();
}

  if(pathname === "/manage"){
    return (
      <>
          <div className="">
            <EditJobModal id={job.id} />
            <Button className="ml-2" onClick={handleDelete} variant={"default"} size={"sm"}>Delete</Button>
          </div>
      </>
    );
  } 
  return(
    ""
  )
  };



