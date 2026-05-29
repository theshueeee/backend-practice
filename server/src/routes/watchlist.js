import express from "express";
import {getWatchlist, addToWatchlist, deleteFromWatchlist, updateFromWatchlist} from "../controller/watchlistController.js";
import validateRequest from "../middleware/validateRequest.js";
import addToWatchlistSchema from "../validators/watchlistValidators.js";

const router = express.Router();

router.get("/", getWatchlist);
router.post("/", validateRequest(addToWatchlistSchema),addToWatchlist);

router.delete("/:id", deleteFromWatchlist);

router.put("/:id", validateRequest(addToWatchlistSchema),updateFromWatchlist);

export default router;