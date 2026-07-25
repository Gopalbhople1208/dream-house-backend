const express = require("express");

const router = express.Router();
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  registerEvent
} = require("../controllers/eventController");


// =====================================
// Get All Events
// =====================================
router.get("/", getEvents);

// =====================================
// Get Single Event
// =====================================
router.get("/:id", getEvent);

// =====================================
// Create Event
// =====================================
router.post("/", createEvent);

// =====================================
// Update Event
// =====================================
router.put("/:id", updateEvent);

// =====================================
// Delete Event
// =====================================
router.delete("/:id", deleteEvent);


// Register Event  ✅ MUST EXIST
router.post(
  "/register/:id",
  registerEvent
);



module.exports = router;