export interface UserData {
  picture: string;
  name: string;
  role: string;
  email: string;
  created: string;
  status: string;
  statusColor: string;
}

export function useData() {
  const usersList = ref<UserData[]>([
    {
      picture: 'user-1.avif',
      name: 'Alexander Carpenter',
      role: 'Admin',
      created: 'Feb 12, 2023',
      status: 'Active',
      statusColor: 'green',
      email: 'acarpenter@hotmail.com',
    },
    {
      picture: 'user-2.avif',
      name: 'Blake Bowman',
      role: 'Editor',
      created: 'Jan 11, 2024',
      status: 'Inactive',
      statusColor: 'red',
      email: 'blakebowman@gmail.com',
    },
    {
      picture: 'user-3.avif',
      name: 'Carolina Moore',
      role: 'Editor',
      created: 'Jan 10, 2023',
      status: 'Suspended',
      statusColor: 'orange',
      email: 'carolinamoore55@gmail.com',
    },
  ]);

  return {
    usersList,
  };
}
