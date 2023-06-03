import express from 'express';
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import cors from 'cors';
const PORT = process.env.PORT || 3001;

config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.API_KEY,
}));

app.post('/api/query', async (req, res) => {
  try {
    const { userInput } = req.body;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: userInput,
      max_tokens: 200,
      temperature: 0.9,
      top_p: 0.9,
    });
    res.json(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing request' });
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


