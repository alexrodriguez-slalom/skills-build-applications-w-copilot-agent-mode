import ResourcePage from './ResourcePage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Level' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'recommendedFor', label: 'Teams' },
  { key: 'exercises', label: 'Exercises' },
]

function Workouts() {
  return <ResourcePage title="Workouts" eyebrow="Suggestions" resource="workouts" endpoint={endpoint} columns={columns} />
}

export default Workouts