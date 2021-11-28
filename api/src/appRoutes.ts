import express from 'express';
import { config } from "dotenv";
import bodyParser from 'body-parser';
import path from 'path';
config();

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
}

export const app = express();

// route for api to /api/v1
const api = express.Router();
const v1 = express.Router();


app.use("/api", api);
// api.use("/v1", v1);

// for json parsing
api.use(bodyParser.json());

// app.get('/', (req,res) => res.send('Welcome3!'));
api.get('/notes/:title', (req,res) => {
  const noteTitle = req.params.title;
  res.status(200).json(notesList[noteTitle]);
});

api.post('/notes/:title/like', (req,res) => {
  const noteTitle = req.params.title;
  notesList[noteTitle].like += 1;
  res.status(200).json(notesList[noteTitle]);
});

// CLient Config

const pathToClientBuild = path.resolve(__dirname, "../", "../", "../", "client", "build")

// app.use(express.static(path.join(__dirname, '/build')));
app.use("/static", express.static(path.resolve(pathToClientBuild, "static")));
app.use("/index.html", (req, res) =>
    res.sendFile(path.resolve(pathToClientBuild, "index.html"))
  );


// app.get(
//   "/*",
//   wrapAsyncHandler(async (req, res) => {
//     let baseUrl = "https://";
//     if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "test") {
//       baseUrl = "http://";
//     }
//     const response = await axios.get(
//       `${baseUrl}${req.headers.host}/index.html`
//     );
//     res.send(response.data);
//   })
// );
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(pathToClientBuild, "index.html"));
})
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + 'build/index.html'));
// })
