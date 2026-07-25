const Staff = require("../models/Staff");


// GET ALL STAFF
exports.getStaff = async(req,res)=>{

    try{

        const staff = await Staff.find();

        res.status(200).json(staff);

    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};




exports.getStaffById = async(req,res)=>{

    try{

        const staff = await Staff.findById(req.params.id);


        if(!staff){
            return res.status(404).json({
                message:"Staff not found"
            });
        }


        res.status(200).json(staff);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// CREATE STAFF
exports.createStaff = async(req,res)=>{

    try{

        const staff = await Staff.create(req.body);

        res.status(201).json(staff);

    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};




// UPDATE STAFF
exports.updateStaff = async(req,res)=>{

    try{

        const staff = await Staff.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );


        res.status(200).json(staff);

    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};





// DELETE STAFF
exports.deleteStaff = async(req,res)=>{

    try{

        await Staff.findByIdAndDelete(req.params.id);


        res.status(200).json({
            message:"Staff Deleted"
        });


    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};