"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const books_1 = __importDefault(require("./routes/books"));
const app = (0, express_1.default)();
const PORT = 3000;
//enable cors
app.use((0, cors_1.default)());
//enable json parser
app.use(express_1.default.json());
// use the route
app.use("/api/books", books_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to Journal Book");
});
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is successfuly listening at port", PORT);
    }
    else {
        console.error("An error occurred: ", error);
    }
});
main().catch((error) => console.error(error));
async function main() {
    //prepare string
    const conectionString = "mongodb://localhost:27017/book-model";
    await mongoose_1.default.connect(conectionString);
    mongoose_1.default.set("strictQuery", true);
}
