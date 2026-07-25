const express=require("express");

const router=express.Router();

const {

getFlats,
getFlat,
createFlat,
updateFlat,
deleteFlat

}=require("../controllers/flatController");

router.get("/",getFlats);

router.get("/:id",getFlat);

router.post("/",createFlat);

// router.put("/:id",updateFlat);
router.put("/:id", updateFlat);

router.delete("/:id",deleteFlat);

module.exports=router;