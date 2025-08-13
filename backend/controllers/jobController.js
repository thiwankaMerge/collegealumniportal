const Job = require('../models/Job');

// Get all jobs for the authenticated user
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.id });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new job for the authenticated user
const addJob = async (req, res) => {
  const { title, company, location, description, salary } = req.body;
  try {
    const job = await Job.create({
      userId: req.user.id,
      title,
      company,
      location,
      description,
      salary,
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing job (owned by the user)
const updateJob = async (req, res) => {
  const { title, company, location, description, salary } = req.body;
  try {
    const job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ message: 'Job not found' });
    if (job.userId.toString() !== req.user.id)
      return res.status(403).json({ message: 'Unauthorized' });

    job.title = title || job.title;
    job.company = company || job.company;
    job.location = location || job.location;
    job.description = description || job.description;
    job.salary = salary || job.salary;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a job (only if owned by user)
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ message: 'Job not found' });
    if (job.userId.toString() !== req.user.id)
      return res.status(403).json({ message: 'Unauthorized' });

    await job.remove();
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getJobs, addJob, updateJob, deleteJob };
