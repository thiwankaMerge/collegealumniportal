import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../axiosConfig";

const JobForm = ({ jobs, setJobs, editingJob, setEditingJob }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    salary: "",
  });

  useEffect(() => {
    if (editingJob) {
      setFormData({
        title: editingJob.title,
        company: editingJob.company,
        location: editingJob.location,
        description: editingJob.description,
        salary: editingJob.salary,
      });
    } else {
      setFormData({
        title: "",
        company: "",
        location: "",
        description: "",
        salary: "",
      });
    }
  }, [editingJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJob) {
        const res = await axiosInstance.put(
          `/api/jobs/${editingJob._id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        setJobs(jobs.map((job) => (job._id === res.data._id ? res.data : job)));
      } else {
        const res = await axiosInstance.post("/api/jobs", formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setJobs([...jobs, res.data]);
      }
      setEditingJob(null);
      setFormData({
        title: "",
        company: "",
        location: "",
        description: "",
        salary: "",
      });
    } catch (error) {
      alert("Failed to save job");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        {editingJob ? "Edit Job" : "Add Job"}
      </h2>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Salary"
        value={formData.salary}
        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        {editingJob ? "Update Job" : "Add Job"}
      </button>
    </form>
  );
};

export default JobForm;
