import { createContext } from "react";

const AuthContext = createContext({
  phone: "",
  password: "",
});

export default AuthContext;
