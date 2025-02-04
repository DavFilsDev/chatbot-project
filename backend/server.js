const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const botReply = `You said: ${userMessage}`; // Replace with LLM logic later
  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});