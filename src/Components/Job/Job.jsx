import { ImLocation2 } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-sky-500 mr-4 text-blue-800">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-sky-500 mr-4 text-blue-800">
            {job_type}
          </button>
        </div>
        <div className="flex mt-4 gap-7">
          <h2 className="flex">
            <ImLocation2 className="text-2xl mr-2"></ImLocation2>
            {location}
          </h2>
          <h2 className="flex">
            <TbCoinTakaFilled className="text-2xl mr-2"></TbCoinTakaFilled>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
