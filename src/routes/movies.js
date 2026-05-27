import express from "express";
const router = express.Router();

//getting data
router.get("/", (req,res)=>{
    res.send("Assna shit");
});

//creating data
router.post("/", (req,res)=>{
    res.send("Assna shit");
});

//updating data
router.put("/", (req,res)=>{
    res.send("Assna shit");
});

//deleting data
router.delete("/", (req,res)=>{
    res.send("Assna shit");
});
export default router;