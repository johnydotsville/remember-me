type UserRole = 'admin' | 'user' | 'guest';

type PersonalInfo = {
  firstname?: string;
  lastname?: string;
  year?: number;
}

interface UserProfile {
  username: string;
  email: string;
  role: UserRole;
  personal?: PersonalInfo
}

const user: UserProfile = {
  username: 'huck',
  email: 'huckf@gmail.com',
  role: 'user',
  personal: {
    'firstname': 'Huck',
    'lastname': 'Finn'
  }
}