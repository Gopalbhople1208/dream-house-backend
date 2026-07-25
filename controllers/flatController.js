const Flat = require("../models/Flat");

exports.getFlats = async(req,res)=>{

    try{

        const flats=await Flat.find();

        res.json(flats);

    }

    catch(err){

        res.status(500).json(err);

    }

};

exports.getFlat=async(req,res)=>{

    try{

        const flat=await Flat.findById(req.params.id);

        res.json(flat);

    }

    catch(err){

        res.status(500).json(err);

    }

};

exports.createFlat=async(req,res)=>{

    try{

        const flat=await Flat.create(req.body);

        res.status(201).json(flat);

    }

    catch(err){

        res.status(400).json(err);

    }

};

// exports.updateFlat=async(req,res)=>{

//     try{

//         const flat=await Flat.findByIdAndUpdate(

//             req.params.id,

//             req.body,

//             {new:true}

//         );

//         res.json(flat);

//     }

//     catch(err){

//         res.status(400).json(err);

//     }

// };


exports.updateFlat = async (req, res) => {
  try {
    const flat = await Flat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      flat,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteFlat=async(req,res)=>{

    try{

        await Flat.findByIdAndDelete(req.params.id);

        res.json({

            message:"Flat Deleted"

        });

    }

    catch(err){

        res.status(500).json(err);

    }

};