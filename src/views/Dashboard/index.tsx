import { useEffect, useState } from 'react';
import { usersApi } from '../../shared/logic/api/usersApi';
import { User } from '../../shared/types/User';
import { Box } from '@mui/material';

export const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersResponse = await usersApi.getUsers();
      setUsers(usersResponse.data);
    }
    void fetchUsers();
  }, [])

  return <Box>
    <h2>Dashboard</h2>
    {
      users.map(user => <p key={user.id}>{user.name}</p>)
    }
  </Box>
}
