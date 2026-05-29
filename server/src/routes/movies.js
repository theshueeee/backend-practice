import express from "express";
import { getMovies, getMovie } from "../controller/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);

export default router;