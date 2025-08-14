import { useAuth } from "../context/AuthContext";
import axiosInstance from "../axiosConfig";

const JobList = ({ jobs, setJobs, setEditingJob }) => {
  const { user } = useAuth();

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
          <h2 className="text-lg font-bold">
            {job.title} at {job.company}
          </h2>
          <p>{job.description}</p>
          <p className="text-sm text-gray-500">Location: {job.location}</p>
          <p className="text-sm text-gray-500">Salary: {job.salary}</p>
          <div className="mt-2">
            <button
              onClick={() => setEditingJob(job)}
              className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
