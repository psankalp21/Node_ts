import express from 'express';
import routes from './routes/index';

const port = 8000;
const app = express();
app.use(express.json());

app.use('/nodeapi', routes);

app.listen(port, () => {
    console.log('Running ...' + port);
});
