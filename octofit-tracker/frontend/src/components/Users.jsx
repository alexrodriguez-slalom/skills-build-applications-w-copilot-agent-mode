import ResourcePage from './ResourcePage'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { key: 'firstName', label: 'First name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'email', label: 'Email' },
  { key: 'teamName', label: 'Team' },
  { key: 'role', label: 'Role' },
  { key: 'weeklyGoalMinutes', label: 'Goal min' },
]

function Users() {
  return <ResourcePage title="Users" eyebrow="Member Profiles" resource="users" endpoint={endpoint} columns={columns} />
}

export default Users