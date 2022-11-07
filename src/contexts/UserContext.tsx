import { createContext, ReactNode, useContext } from "react";

interface User {
  name: string;
  role: string;
  avatar: string;
  background: string;
  id: number;
}

interface UserContextType {
  user: User;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
  const user = {
    name: "Gabriel Pereira",
    role: "Frontend Engineer",
    avatar: "https://github.com/ggonpereira.png",
    background:
      "https://unsplash.com/photos/fb-Yqt_f9DQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3NzgzOTc2&force=true&w=640",
    id: 1,
  };

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
