import ResourcePage from './ResourcePage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'displayName', label: 'Athlete' },
  { key: 'teamName', label: 'Team' },
  { key: 'totalMinutes', label: 'Minutes' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return <ResourcePage title="Leaderboard" eyebrow="Competition Standings" resource="leaderboard" endpoint={endpoint} columns={columns} />
}

export default Leaderboard