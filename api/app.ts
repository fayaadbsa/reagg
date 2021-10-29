import express from 'express';
import { config } from "dotenv";
import bodyParser from 'body-parser';
config();

const app = express();
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
}




app.use(bodyParser.json());

app.get('/', (req,res) => res.send('Welcome!'));
app.get('/api/notes/:name', (req,res) => {
  const noteName = req.params.name;
  res.status(200).send(`${noteName} likes: ${notesList[noteName].like}`)
});

app.post('/api/notes/:name/like', (req,res) => {
  const noteName = req.params.name;
  notesList[noteName].like += 1;
  res.status(200).send(`${noteName} likes: ${notesList[noteName].like}`)
});

app.listen(PORT, () => {
  console.log(`server is in ${process.env.NODE_ENV} mode`);
  console.log(`Server is running on port: ${PORT}`);
});