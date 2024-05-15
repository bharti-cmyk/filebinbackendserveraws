import express from 'express';
import routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
// import serverless from 'serverless-http';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

// export const handler = serverless(app);
