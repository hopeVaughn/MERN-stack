import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from "../errors/index.js";


const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // test user
    const testUser = payload.userId === '63a1ef779b48b0bd2819e873';
    // attach user to payload
    req.user = { userId: payload.userId, testUser };
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
}

export default auth;