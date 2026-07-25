const Event = require("../models/Event");

// ======================================
// Get All Events
// ======================================
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

// ======================================
// Get Single Event
// ======================================
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      event,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch event",
      error: error.message,
    });
  }
};

// ======================================
// Create Event
// ======================================
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create event",
      error: error.message,
    });
  }
};

// ======================================
// Update Event
// ======================================
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event updated successfully",
      event,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update event",
      error: error.message,
    });
  }
};

// ======================================
// Delete Event
// ======================================
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete event",
      error: error.message,
    });
  }
};
// ======================================
// Register Event
// ======================================

exports.registerEvent = async(req,res)=>{

try{


const event = await Event.findById(req.params.id);


if(!event){

return res.status(404).json({
message:"Event not found"
});

}



event.registrations.push({

name:req.body.name,

email:req.body.email,

phone:req.body.phone

});



await event.save();



res.status(200).json({

message:"Registration successful",

event

});


}
catch(error){

console.log(error);

res.status(500).json({

message:error.message

});

}

};