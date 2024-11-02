import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { config } from '../config';
import { ApiError } from '../utils/ApiError';

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new ApiError(400, 'Email already registered');
  }

  const user = await User.create({
    email,
    password,
    name,
  });

  const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '7d' });

  res.status(201).json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '7d' });

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
};

export const me = async (req: Request, res: Response) => {
  const user = await User.findByPk(req.user!.id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });
};