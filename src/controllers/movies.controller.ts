import { Request, Response } from "express";
import { Movie } from "../entities";
import createMovie from "../services/postMovies.services";
import { IMoviesData } from "../interfaces/interfacesMovies";
import { listMoviesService } from "../services/getMovies.services";
import updateMovieService from "../services/patchMovies.services";
import { deleteMovieService } from "../services/deleteMovies.services";

const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: Movie = req.body;

  const response = await createMovie(data);

  return res.status(201).json(response);
};

const listMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: IMoviesData = await listMoviesService(req.query);
  return res.status(200).json(response);
};

const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = req.body;

  const response = await updateMovieService(+id, data);

  return res.status(200).json(response);
};

const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  await deleteMovieService(+id);

  return res.status(204).send();
};

export {
  createMovieController,
  listMoviesController,
  updateMovieController,
  deleteMovieController,
};
