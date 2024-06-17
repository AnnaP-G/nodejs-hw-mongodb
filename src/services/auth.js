import createHttpError from 'http-errors';
import { User } from '../db/models/user.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { Session } from '../db/models/session.js';
import { FIFTEEN_MINUTES, THIRTY_DAYS } from '../constants/constants.js';

export const registerUser = async (payload) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const emailIsNotUnique = await User.findOne({ email: payload.email });

  if (emailIsNotUnique) {
    throw createHttpError(409, 'Email in use');
  }
  return await User.create({ ...payload, password: hashedPassword });
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }

  await Session.deleteOne({ userId: user._id });

  const accessToken = crypto.randomBytes(20).toString('base64');
  const refreshToken = crypto.randomBytes(20).toString('base64');

  return Session.create({
    accessToken,
    refreshToken,
    userId: user._id,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS),
  });
};

export const refreshUserSession = async({ sessionId, refreshToken });

export const logoutUser = async (sessionId) => {
  await Session.deleteOne({
    _id: sessionId,
  });
};
