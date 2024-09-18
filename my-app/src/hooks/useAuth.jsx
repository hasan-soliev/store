
import {useState} from 'react';

const useAuth = () => {
  const [phone, setPhone] = useState(2121);
  const [password, setPassword] = useState('');

  return {
    phone,
    password,
    setPhone,
    setPassword

  };
};

export default useAuth;
