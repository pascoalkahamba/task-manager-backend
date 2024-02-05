import { Request, Response } from "express";

export interface AnnotationsDataProps {
  _id: string;
  title: string;
  notes: string;
  priority: boolean;
  save: () => void;
}

const annotationsDataSchema = require("../model/annotationsDataSchema");

module.exports = {
  async read(request: Request, response: Response) {
    const annotationsList: AnnotationsDataProps[] =
      await annotationsDataSchema.find();
    return response.json(annotationsList);
  },

  async create(request: Request, response: Response) {
    const { title, notes, priority } = request.body as AnnotationsDataProps;

    if (!title || !notes) {
      return response
        .status(401)
        .json({ error: "O titulo e as anotações devem ser prenchidos." });
    }

    const annotationsData: AnnotationsDataProps =
      await annotationsDataSchema.create({
        title,
        notes,
        priority,
      });

    return response.json(annotationsData);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const annotationDeleted: AnnotationsDataProps =
      await annotationsDataSchema.findOneAndDelete({
        _id: id,
      });

    if (annotationDeleted) {
      return response.json(annotationDeleted);
    }

    return response
      .status(400)
      .json({ error: "Anotação não encontrada para ser eliminada." });
  },
};
