import express from 'express';
import welcomeRoute from './welcome.routes';
import userRoute from './user.route';
import accommodationRoute from './accommodation.route';


const app = express.Router();

app.use(welcomeRoute);
app.use('/api', userRoute);
app.use('/api', accommodationRoute);


export default app;
