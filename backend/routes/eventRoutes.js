

// // eventRoutes.js
// const express = require('express');
// const { getAllEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController'); // ✅ FIXED
// const { protect } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.get('/', getAllEvents);
// router.post('/', createEvent);
// router.put('/:id', updateEvent);
// router.delete('/:id', deleteEvent);

// module.exports = router;

const express = require('express');
const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect); // protect all routes below

router.get('/', getAllEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
