// const Contact = require("../models/Contact");

// // Create Contact Message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email and message are required",
//       });
//     }

//     const contact = await Contact.create({
//       name,
//       email,
//       message,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//       contact,
//     });
//   } catch (error) {
//     console.error("Contact Error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to send message",
//     });
//   }
// };

// // Get all contact messages
// exports.getContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json({
//       success: true,
//       contacts,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const Contact = require("../models/Contact");

// ========================================
// SEND CONTACT MESSAGE
// ========================================
exports.createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const newMessage = await Contact.create({
      name,
      email,
      message,
      status: "Unread",
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: newMessage,
    });
  } catch (error) {
    console.error(
      "Create contact message error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// GET ALL CONTACT MESSAGES
// ========================================
exports.getAllContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// GET UNREAD MESSAGE COUNT
// ========================================
exports.getUnreadContactMessages = async (
  req,
  res
) => {
  try {
    const count = await Contact.countDocuments({
      status: "Unread",
    });

    res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// MARK MESSAGE AS READ
// ========================================
exports.markContactMessageAsRead = async (
  req,
  res
) => {
  try {
    const updatedMessage =
      await Contact.findByIdAndUpdate(
        req.params.id,
        {
          status: "Read",
        },
        {
          new: true,
        }
      );

    if (!updatedMessage) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message marked as read.",
      data: updatedMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// DELETE MESSAGE
// ========================================
exports.deleteContactMessage = async (
  req,
  res
) => {
  try {
    const deletedMessage =
      await Contact.findByIdAndDelete(
        req.params.id
      );

    if (!deletedMessage) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};