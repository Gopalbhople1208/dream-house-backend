// const express = require("express");
// const router = express.Router();

// const {
//   registerResident,
//   loginResident,
//   getResidentProfile,
//   updateResidentProfile,
//   getAllResidents,
// } = require("../controllers/residentController");

// const { verifyToken } = require("../middleware/authMiddleware");

// // Public routes
// router.post("/register", registerResident);
// router.post("/login", loginResident);

// // Protected routes (require authentication)
// router.get("/profile", verifyToken, getResidentProfile);
// router.put("/profile", verifyToken, updateResidentProfile);

// // Admin routes
// router.get("/", getAllResidents);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {

    registerResident,
    loginResident,
    getAllResidents,
    getResidentById,
    updateResident,
    deleteResident,

} = require("../controllers/residentController");

router.post("/register", registerResident);
router.post("/login", loginResident);

router.get("/", getAllResidents);

router.get("/:id", getResidentById);

router.put("/:id", updateResident);

router.delete("/:id", deleteResident);

module.exports = router;