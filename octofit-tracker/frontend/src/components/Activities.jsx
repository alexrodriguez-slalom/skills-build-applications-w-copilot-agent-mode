import ResourcePage from './ResourcePage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { key: 'userEmail', label: 'Athlete' },
  { key: 'teamName', label: 'Team' },
  { key: 'activityType', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'distanceMiles', label: 'Miles' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'completedAt', label: 'Date' },
]

function Activities() {
  return <ResourcePage title="Activities" eyebrow="Recent Training" resource="activities" endpoint={endpoint} columns={columns} />
}

export default Activities