import { Router } from 'express';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/users/', async (_req, res) => {
  const users = await User.find().sort({ lastName: 1, firstName: 1 });

  res.json({ resource: 'users', data: users });
});

router.get('/teams/', async (_req, res) => {
  const teams = await Team.find().sort({ name: 1 });

  res.json({ resource: 'teams', data: teams });
});

router.get('/activities/', async (_req, res) => {
  const activities = await Activity.find().sort({ completedAt: -1 });

  res.json({ resource: 'activities', data: activities });
});

router.get('/leaderboard/', async (_req, res) => {
  const leaderboard = await Leaderboard.find().sort({ rank: 1 });

  res.json({ resource: 'leaderboard', data: leaderboard });
});

router.get('/workouts/', async (_req, res) => {
  const workouts = await Workout.find().sort({ difficulty: 1, title: 1 });

  res.json({ resource: 'workouts', data: workouts });
});

export default router;