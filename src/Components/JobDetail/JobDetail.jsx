import { useLoaderData, useParams } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Utility/Localstroage";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("you have successfully applied the job");
  };
  return (
    <div>
      <h2 className="text-center text-xl font-bold p-4">
        Job details of Number : {id}
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="p-4">
            <span className="text-xl font-semibold">Job Description : </span>
            {job.job_description}
          </h2>
          {/* 2 */}
          <h2 className="p-4">
            <span className="text-xl font-semibold">Job Responsibility : </span>
            {job.job_responsibility}
          </h2>
          {/* 3 */}
          <h2 className="p-4">
            <span className="text-xl font-semibold">
              Educational Requirements :
            </span>
            {job.educational_requirements}
          </h2>
          {/* 4 */}
          <h2 className="p-4">
            <span className="text-xl font-semibold">Experiences : </span>
            {job.experiences}
          </h2>
        </div>
        <div className="border">
          <h2 className="text-xl font-bold text-center">Job Details</h2>
          <br />
          <hr />
          <div className="p-4">
            <h2 className="flex font-semibold">
              <BiDollarCircle className="text-xl text-blue-500 mr-2"></BiDollarCircle>
              salary : {job.salary}
            </h2>
            <h2 className="flex font-semibold">
              <FaCalendarDays className=" text-blue-500 mr-2"></FaCalendarDays>
              job title : {job.job_title}
            </h2>
          </div>
          <h2 className="text-xl font-bold text-center">Contact Information</h2>
          <br />
          <hr />

          <div className="flex p-4">
            <LuPhoneCall className="text-blue-500 text-xl mr-3"></LuPhoneCall>
            <div>
              <h2>
                <span className="text-xl font-bold">phone : </span>
                {job.contact_information.phone}
              </h2>
            </div>
          </div>
          {/* 2 */}
          <div className="flex p-4">
            <MdOutlineMail className="text-blue-500 text-2xl mr-3"></MdOutlineMail>
            <div>
              <h2>
                <span className="text-xl font-bold">Email: </span>
                {job.contact_information.email}
              </h2>
            </div>
          </div>
          {/* 3 */}
          <div className="flex p-4">
            <SlLocationPin className="text-blue-500 text-2xl mr-3"></SlLocationPin>
            <div>
              <h2>
                <span className="text-xl font-bold">Address : </span>
                {job.contact_information.address}
              </h2>
            </div>
          </div>

          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetail;
