import Link from "next/link"


function UserPage() {
  const users = [
    { id: 1, username: 'sama' },
    { id: 2, username: 'ashi' },

  ]
  return (
    <div>
      <h2> UserPage </h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link href={{
              pathname: '/users/[id]',
              query: { id: item.id }
            }}> {item.username} </Link>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage