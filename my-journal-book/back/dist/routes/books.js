"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Book_1 = __importDefault(require("../models/Book"));
const router = express_1.default.Router();
//GET: list
router.get("/", async (req, res) => {
    try {
        const books = await Book_1.default.find();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});
//GET: get by id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const books = await Book_1.default.findOne({ _id: id });
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});
//POST: create
router.post("/", async (req, res) => {
    try {
        const book = new Book_1.default(req.body);
        const saveBook = await book.save();
        res.status(200).json({
            message: "Se ha creado el libro correctamente",
        });
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});
//PUT: update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = req.body;
        const updateBook = await Book_1.default.findOneAndUpdate({
            _id: id,
        }, {
            $set: book,
        }, {
            returnDocument: "after",
        });
        res.status(200).json(updateBook);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});
//DELETE:
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Book_1.default.deleteOne({ _id: id });
        res.status(200).json({ message: "Libro eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
});
exports.default = router;
