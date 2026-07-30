import ResourcePage from './ResourcePage'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'displayName', label: 'Athlete' },
  { key: 'teamName', label: 'Team' },
  { key: 'totalMinutes', label: 'Minutes' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return <ResourcePage title="Leaderboard" eyebrow="Competition Standings" resource="leaderboard" columns={columns} />
}

export default Leaderboard