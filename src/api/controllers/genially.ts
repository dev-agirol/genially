import { Response, Request } from "express";

// Services
import GetAllGeniallyService from "../../contexts/core/genially/application/GetAllGeniallyService";
import CreateGeniallyService from "../../contexts/core/genially/application/CreateGeniallyService";
import DeleteGeniallyService from "../../contexts/core/genially/application/DeleteGeniallyService";
import RenameGeniallyService from "../../contexts/core/genially/application/RenameGeniallyService";

// errors
import { ErrorApi } from "./errors";

// Repository Active
import { repo } from "../app";

// helpers
const isEmpty = (str: string): boolean => {
  return (!str || str.length === 0);
};

const checkName = (name: string): boolean => {
  return !isEmpty(name) && (name.length >= 3 && name.length <= 20);
};
const checkDescription = (description: string): boolean => {
  return description.length <= 125;
};

export const createGenially = async (req: Request, res: Response, next: any) => {
  try {
    const { id, name, description } = req.body;
    if (!checkName(name)) {
      next(new ErrorApi("The name property is not in the correct format.", 400));

    }
    if (!checkDescription(description)) {
      next(new ErrorApi("The description property is not in the correct format.", 400));
    }
    const service = new CreateGeniallyService(repo);
    const genially = await service.execute({ id, name, description });

    res.status(200).send({ status: "ok", payload: genially });

  } catch (err) {
    // console.log(err);
    next(err);
  }
};

export const getAllGenially = async (req: Request, res: Response, next: any) => {
  try {

    const service = new GetAllGeniallyService(repo);
    const allGenially = await service.execute();

    res.status(200).send({ status: "ok", payload: allGenially });
  } catch (err) {
    next(err);
  }

};

export const getCounterGenially = async (req: Request, res: Response, next: any) => {
  try {

    const service = new GetAllGeniallyService(repo);
    const allGenially = await service.execute();

    res.status(200).send({ status: "ok", payload: { created: allGenially.length } });
  } catch (err) {
    next(err);
  }

};

export const deleteGenially = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params;
    const service = new DeleteGeniallyService(repo);
    const genially = await service.execute(id);

    res.status(200).send({ status: "ok", payload: genially });
  } catch (err) {
    next(err);
  }
};

export const renameGenially = async (req: Request, res: Response, next: any) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    if (!checkName(name)) {
      throw new ErrorApi("Error: The description property is not in the correct format.", 404);
    }

    const service = new RenameGeniallyService(repo);
    const genially = await service.execute(name, id);

    res.status(200).send({ status: "ok", payload: genially });
  } catch (err) {
    // console.log(err);
    next(err);
  }

};

