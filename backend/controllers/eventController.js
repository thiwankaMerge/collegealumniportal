// const Event = require('../models/Event');

// exports.getAllEvents = async (req, res) => {
//     const events = await Event.find();
//     res.json(events);
// };

// exports.createEvent = async (req, res) => {
//     const event = new Event(req.body);
//     await event.save();
//     res.status(201).json(event);
// };

// exports.updateEvent = async (req, res) => {
//     const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(event);
// };

// exports.deleteEvent = async (req, res) => {
//     await Event.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Event deleted' });
// };
const Event = require('../models/Event');

// GET /api/events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user.id }); // filtered by user
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/events
const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    const event = await Event.create({
      userId: req.user.id, // attach user
      title,
      description,
      date,
      location,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/events/:id
const updateEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Optional: check if current user owns the event
    if (event.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.location = location || event.location;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/events/:id
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Optional: check if current user owns the event
    if (event.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await event.remove();
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
