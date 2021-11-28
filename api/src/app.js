"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
const notesList = {
    'eat': {
        like: 0,
    },
    'sleep': {
        like: 0,
    },
    'play': {
        like: 0,
    }
};
app.use(body_parser_1.default.json());
app.get('/', (req, res) => res.send('Welcome!'));
app.get('/api/notes/:title', (req, res) => {
    const noteTitle = req.params.title;
    res.status(200).json(notesList[noteTitle]);
});
app.post('/api/notes/:title/like', (req, res) => {
    const noteTitle = req.params.title;
    notesList[noteTitle].like += 1;
    res.status(200).json(notesList[noteTitle]);
});
app.listen(PORT, () => {
    console.log(`server is in ${process.env.NODE_ENV} mode`);
    console.log(`Server is running on port: ${PORT}`);
});
