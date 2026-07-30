import ResourcePage from './ResourcePage'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'focus', label: 'Focus' },
  { key: 'memberCount', label: 'Members' },
]

function Teams() {
  return <ResourcePage title="Teams" eyebrow="Training Groups" resource="teams" columns={columns} />
}

export default Teams