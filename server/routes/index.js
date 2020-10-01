import express from 'express';
import welcomeRoute from './welcome.routes';
import userRoute from './user.route';


const app = express.Router();

app.use(welcomeRoute);
app.use('/api', userRoute);


export default app;
