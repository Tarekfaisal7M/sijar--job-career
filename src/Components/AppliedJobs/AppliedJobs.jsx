import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/Localstroage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      // console(jobsApplied);
      setAppliedJobs(jobsApplied);
    }
  }),
    [];
  return (
    <div>
      <h3 className="text-2xl">Applied jobs : {appliedJobs.length}</h3>
    </div>
  );
};

export default AppliedJobs;
