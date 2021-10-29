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
app.get('/notes', (req, res) => res.send(`Noted`));
// app.get('/notes/:name', (req,res) => res.send(`Noted ${req.params.name}`));
app.post('/api/notes/:name/like', (req, res) => {
    console.log(req.params.name);
    const noteName = req.params.name;
    notesList[noteName].like += 1;
    res.status(200).send(`${noteName} likes: ${req.body.name}`);
});
app.listen(PORT, () => {
    console.log(`server is in ${process.env.NODE_ENV} mode`);
    console.log(`Server is running on port: ${PORT}`);
});
