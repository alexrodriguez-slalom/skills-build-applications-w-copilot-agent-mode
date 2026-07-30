import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamName: { type: String, required: true },
    role: { type: String, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { collection: 'users', timestamps: true },
);

export const User = model('User', userSchema);