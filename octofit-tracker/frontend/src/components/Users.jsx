import ResourcePage from './ResourcePage'

const columns = [
  { key: 'firstName', label: 'First name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'email', label: 'Email' },
  { key: 'teamName', label: 'Team' },
  { key: 'role', label: 'Role' },
  { key: 'weeklyGoalMinutes', label: 'Goal min' },
]

function Users() {
  return <ResourcePage title="Users" eyebrow="Member Profiles" resource="users" columns={columns} />
}

export default Users