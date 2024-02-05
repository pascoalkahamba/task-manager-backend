import { Request, Response } from "express";

import { AnnotationsDataProps } from "./annotationsControllers";

const annotationsDataSchema = require("../model/annotationsDataSchema");

module.exports = {
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { notes } = request.body as AnnotationsDataProps;

    const annotationsUpdated = (await annotationsDataSchema.findOne({
      _id: id,
    })) as AnnotationsDataProps;

    if (notes) {
      annotationsUpdated.notes = notes;
      await annotationsUpdated.save();
      return response.json(annotationsUpdated);
    }

    return response
      .status(400)
      .json({ error: "O Campo anotações deve ser preenchido." });
  },
};
