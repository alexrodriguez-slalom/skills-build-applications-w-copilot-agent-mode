import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true },
    userEmail: { type: String, required: true },
    displayName: { type: String, required: true },
    teamName: { type: String, required: true },
    totalMinutes: { type: Number, required: true },
    points: { type: Number, required: true },
  },
  { collection: 'leaderboard', timestamps: true },
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);