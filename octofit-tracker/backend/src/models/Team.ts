import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    focus: { type: String, required: true },
    memberCount: { type: Number, required: true },
  },
  { collection: 'teams', timestamps: true },
);

export const Team = model('Team', teamSchema);