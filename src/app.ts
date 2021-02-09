import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.json({
    help: 'help',
  });
});

export default async () => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log('Application started'.magenta);
  });
};
