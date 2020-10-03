import express from 'express';
import UserController from '../controllers/user.controller';

const route = express.Router();
const { createUser, login } = UserController;

route.post('/create', createUser);
route.post('/login', login);

export default route;