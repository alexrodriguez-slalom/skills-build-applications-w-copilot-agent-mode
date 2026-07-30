import ResourcePage from './ResourcePage'

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
  return <ResourcePage title="Activities" eyebrow="Recent Training" resource="activities" columns={columns} />
}

export default Activities