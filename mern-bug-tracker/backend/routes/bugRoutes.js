const express=require('express');
const Bug=require('../models/Bug');
const router=express.Router();

router.post('/',async(req,res)=>{
    const bug=new Bug(req.body);
    await bug.save();
    console.log("Received request body:", req.body);

    res.status(201).json(bug);
})

router.get('/',async(req,res)=>{
    const bugs=await Bug.find();
    res.json(bugs);
})

router.put('/:id',async(req,res)=>{
    const bug=await Bug.find();
    res.json(bug);
})



router.delete('/:id',async(req,res)=>{
    await Bug.findByIdAndDelete(req.params.id);
    res.json({message:"Bug has been deleted by Meeee"});
})
module.exports=router;