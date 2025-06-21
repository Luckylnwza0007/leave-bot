const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('LINE Webhook received:', req.body);

  const events = req.body.events;
  if (events && events.length > 0) {
    const event = events[0];
    const replyToken = event.replyToken;
    const userText = event.message?.text;

    console.log('User message:', userText);

    // จะตอบข้อความ LINE ในขั้นต่อไป
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});