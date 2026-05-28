import express from "express";
import {addToWatchlist, deleteFromWatchlist, updateFromWatchlist} from "../controller/watchlistController.js";

const router = express.Router();

router.post("/", addToWatchlist);

router.delete("/:id", deleteFromWatchlist);

router.put("/:id", updateFromWatchlist);

export default router;