import ResourcePage from './ResourcePage'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Level' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'recommendedFor', label: 'Teams' },
  { key: 'exercises', label: 'Exercises' },
]

function Workouts() {
  return <ResourcePage title="Workouts" eyebrow="Suggestions" resource="workouts" columns={columns} />
}

export default Workouts