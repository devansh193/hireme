"use client";
import { useSession } from "next-auth/react";
import { Job } from "@prisma/client";
import { EditJobModal } from "./EditJobModal";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {deleteJob} from "@/actions/job";
import { toast } from "./ui/use-toast";

type CardButtonProps = {
  job: Job;
};

export const CardButton = ({ job }: CardButtonProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const userRole = session?.user.role;
  
  const handleDelete = async ()=>{
    const res = await deleteJob(job.id);
    if(res.status==="success"){
        toast({
            description: "deleted!",
        })
    }else {
        toast({
            description: "failed to delete",
        })
    }
}

  if(userRole === "ADMIN"){
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



