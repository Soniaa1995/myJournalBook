import express, { Request, Response } from "express";
import Book from "../models/Book";

// const express = require("express");
// const Book = require("../models/Book");
const router = express.Router();

//GET: list
router.get("/", async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
});

//GET: get by id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const books = await Book.findOne({ _id: id });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
});

//POST: create
router.post("/", async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body);
    const saveBook = await book.save();
    res.status(200).json({
      message: "Se ha creado el libro correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
});

//PUT: update
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = req.body;
    const updateBook = book.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: book,
      },
      {
        new: true,
      },
    );
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
});

//DELETE:
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Book.deleteOne({ _id: id });
    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
});

export default router;
