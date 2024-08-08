import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { ActiveJobs } from "@/components/active-jobs";

const ManageJobsPage = async () => {
  const session = await auth();
  const role = session?.user.role;



  if (role !== "ADMIN") {
    redirect("/");
  }
  return (
    <main className="max-w-screen mx-auto w-full mt-4">
      <div className="flex">
          <ActiveJobs />
      </div>
    </main>
  );
};

export default ManageJobsPage;
