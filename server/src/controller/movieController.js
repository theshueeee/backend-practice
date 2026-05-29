import prisma from "../config/db.js";

const getMovies = async (req, res) => {
  const movies = await prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.status(200).json({
    status: "Success",
    data: {
      movies,
    },
  });
};

const getMovie = async (req, res) => {
  const movie = await prisma.movie.findUnique({
    where: { id: req.params.id },
  });

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.status(200).json({
    status: "Success",
    data: {
      movie,
    },
  });
};

export { getMovies, getMovie };