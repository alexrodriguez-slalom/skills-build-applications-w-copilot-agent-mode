import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      { name: 'Velocity Vibes', city: 'Seattle', focus: 'Cardio endurance', memberCount: 3 },
      { name: 'Core Collective', city: 'Austin', focus: 'Strength training', memberCount: 2 },
      { name: 'Trail Titans', city: 'Denver', focus: 'Outdoor conditioning', memberCount: 2 },
    ]);

    await User.insertMany([
      {
        firstName: 'Maya',
        lastName: 'Chen',
        email: 'maya.chen@example.com',
        teamName: 'Velocity Vibes',
        role: 'Runner',
        weeklyGoalMinutes: 240,
      },
      {
        firstName: 'Jordan',
        lastName: 'Miles',
        email: 'jordan.miles@example.com',
        teamName: 'Core Collective',
        role: 'Strength lead',
        weeklyGoalMinutes: 210,
      },
      {
        firstName: 'Priya',
        lastName: 'Nair',
        email: 'priya.nair@example.com',
        teamName: 'Trail Titans',
        role: 'Cyclist',
        weeklyGoalMinutes: 300,
      },
      {
        firstName: 'Leo',
        lastName: 'Garcia',
        email: 'leo.garcia@example.com',
        teamName: 'Velocity Vibes',
        role: 'HIIT coach',
        weeklyGoalMinutes: 180,
      },
      {
        firstName: 'Avery',
        lastName: 'Brooks',
        email: 'avery.brooks@example.com',
        teamName: 'Core Collective',
        role: 'Mobility coach',
        weeklyGoalMinutes: 160,
      },
    ]);

    await Activity.insertMany([
      {
        userEmail: 'maya.chen@example.com',
        teamName: 'Velocity Vibes',
        activityType: 'Run',
        durationMinutes: 48,
        distanceMiles: 5.6,
        caloriesBurned: 510,
        completedAt: new Date('2026-07-28T13:30:00.000Z'),
      },
      {
        userEmail: 'jordan.miles@example.com',
        teamName: 'Core Collective',
        activityType: 'Strength training',
        durationMinutes: 55,
        distanceMiles: 0,
        caloriesBurned: 430,
        completedAt: new Date('2026-07-29T22:00:00.000Z'),
      },
      {
        userEmail: 'priya.nair@example.com',
        teamName: 'Trail Titans',
        activityType: 'Cycling',
        durationMinutes: 72,
        distanceMiles: 18.4,
        caloriesBurned: 760,
        completedAt: new Date('2026-07-30T12:15:00.000Z'),
      },
      {
        userEmail: 'leo.garcia@example.com',
        teamName: 'Velocity Vibes',
        activityType: 'HIIT',
        durationMinutes: 32,
        distanceMiles: 0,
        caloriesBurned: 380,
        completedAt: new Date('2026-07-30T14:45:00.000Z'),
      },
      {
        userEmail: 'avery.brooks@example.com',
        teamName: 'Core Collective',
        activityType: 'Yoga',
        durationMinutes: 40,
        distanceMiles: 0,
        caloriesBurned: 180,
        completedAt: new Date('2026-07-27T23:30:00.000Z'),
      },
    ]);

    await Leaderboard.insertMany([
      {
        rank: 1,
        userEmail: 'priya.nair@example.com',
        displayName: 'Priya N.',
        teamName: 'Trail Titans',
        totalMinutes: 312,
        points: 1540,
      },
      {
        rank: 2,
        userEmail: 'maya.chen@example.com',
        displayName: 'Maya C.',
        teamName: 'Velocity Vibes',
        totalMinutes: 286,
        points: 1395,
      },
      {
        rank: 3,
        userEmail: 'jordan.miles@example.com',
        displayName: 'Jordan M.',
        teamName: 'Core Collective',
        totalMinutes: 244,
        points: 1210,
      },
      {
        rank: 4,
        userEmail: 'leo.garcia@example.com',
        displayName: 'Leo G.',
        teamName: 'Velocity Vibes',
        totalMinutes: 198,
        points: 990,
      },
      {
        rank: 5,
        userEmail: 'avery.brooks@example.com',
        displayName: 'Avery B.',
        teamName: 'Core Collective',
        totalMinutes: 176,
        points: 840,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Lunchtime 5K Builder',
        focus: 'Cardio endurance',
        difficulty: 'Intermediate',
        durationMinutes: 35,
        recommendedFor: ['Velocity Vibes', 'Trail Titans'],
        exercises: ['Dynamic warmup', 'Tempo run intervals', 'Cooldown walk'],
      },
      {
        title: 'Foundational Strength Circuit',
        focus: 'Strength training',
        difficulty: 'Beginner',
        durationMinutes: 40,
        recommendedFor: ['Core Collective'],
        exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Plank holds'],
      },
      {
        title: 'Trail Climb Conditioning',
        focus: 'Outdoor conditioning',
        difficulty: 'Advanced',
        durationMinutes: 50,
        recommendedFor: ['Trail Titans'],
        exercises: ['Hill repeats', 'Walking lunges', 'Single-leg balance', 'Breathwork cooldown'],
      },
      {
        title: 'Recovery Mobility Flow',
        focus: 'Mobility',
        difficulty: 'Beginner',
        durationMinutes: 25,
        recommendedFor: ['Core Collective', 'Velocity Vibes', 'Trail Titans'],
        exercises: ['Hip openers', 'Thoracic rotations', 'Hamstring flossing', 'Box breathing'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
