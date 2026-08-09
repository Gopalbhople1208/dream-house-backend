// const express = require("express");

// const router = express.Router();

// const {
//   createContact,
//   getContacts,
// } = require("../controllers/contactController");

// router.post("/", createContact);

// router.get("/", getContacts);

// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  createContactMessage,
  getAllContactMessages,
  getUnreadContactMessages,
  markContactMessageAsRead,
  deleteContactMessage,
} = require("../controllers/contactController");

// Visitor sends message
router.post("/", createContactMessage);

// Super Admin gets all messages
router.get("/", getAllContactMessages);

// Super Admin gets unread count
router.get(
  "/unread",
  getUnreadContactMessages
);

// Mark as read
router.put(
  "/:id/read",
  markContactMessageAsRead
);

// Delete
router.delete(
  "/:id",
  deleteContactMessage
);

module.exports = router;