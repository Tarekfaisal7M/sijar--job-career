import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [jobLength, setJobLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Job featured : {jobs.length}</h2>
        <p>
          A job can mean some work that has to be done, for example: there are
          jobs to be done in the house: washing up, mending things that are
          broken, etc.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, jobLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={jobLength === jobs.length && "hidden"}>
        <button
          onClick={() => setJobLength(jobs.length)}
          className="btn btn-block bg-blue-600 text-white text-xl mt-5">
          Show all Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
