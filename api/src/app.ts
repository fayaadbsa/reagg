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
app.get('/api/notes/:title', (req,res) => {
  const noteTitle = req.params.title;
  res.status(200).json(notesList[noteTitle]);
});

app.post('/api/notes/:title/like', (req,res) => {
  const noteTitle = req.params.title;
  notesList[noteTitle].like += 1;
  res.status(200).json(notesList[noteTitle]);
});

app.listen(PORT, () => {
  console.log(`server is in ${process.env.NODE_ENV} mode`);
  console.log(`Server is running on port: ${PORT}`);
});