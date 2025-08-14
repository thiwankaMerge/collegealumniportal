import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import { useAuth } from "../context/AuthContext";

const Jobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axiosInstance.get("/api/jobs", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setJobs(res.data);
      } catch (error) {
        alert("Failed to fetch jobs");
      }
    };

    fetchJobs();
  }, [user]);

  return (
    <div className="container mx-auto p-6">
      <JobForm
        jobs={jobs}
        setJobs={setJobs}
        editingJob={editingJob}
        setEditingJob={setEditingJob}
      />
      <JobList jobs={jobs} setJobs={setJobs} setEditingJob={setEditingJob} />
    </div>
  );
};

export default Jobs;
