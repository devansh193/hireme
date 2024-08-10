import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { ActiveJobs } from "@/components/active-jobs";
import { Card, CardFooter, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card";
import { DataGrid } from "@/components/data-grid";
const ManageJobsPage = async () => {
  const session = await auth();
  const role = session?.user.role;



  if (role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="max-w-screen-2xl mx-auto w-full ">
      <DataGrid/>
      <ActiveJobs />
    </div>
  );
};

export default ManageJobsPage;
