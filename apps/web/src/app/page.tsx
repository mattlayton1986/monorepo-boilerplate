import { getUsers } from "actions";

export default async function Home() {
  // Example server action usage via Prisma.
  const users = await getUsers(); 
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}