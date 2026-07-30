import ResourcePage from './ResourcePage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'focus', label: 'Focus' },
  { key: 'memberCount', label: 'Members' },
]

function Teams() {
  return <ResourcePage title="Teams" eyebrow="Training Groups" resource="teams" endpoint={endpoint} columns={columns} />
}

export default Teams