import { Request, Response } from "express";
import { AnnotationsDataProps } from "./annotationsControllers";

const annotationsDataSchema = require("../model/annotationsDataSchema");

module.exports = {
  async read(request: Request, response: Response) {
    const { priority } = request.query as unknown as AnnotationsDataProps;
    const annotationsData = (await annotationsDataSchema.find({
      priority,
    })) as AnnotationsDataProps[];

    return response.json(annotationsData);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const annotationChanged = (await annotationsDataSchema.findOne({
      _id: id,
    })) as AnnotationsDataProps;

    if (annotationChanged.priority) {
      annotationChanged.priority = false;
    } else {
      annotationChanged.priority = true;
    }

    await annotationChanged.save();

    return response.json(annotationChanged);
  },
};
