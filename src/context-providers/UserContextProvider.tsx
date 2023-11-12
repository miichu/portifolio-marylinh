import { createContext, useContext, useState } from "react";
import { IUser } from "../types/user";

export interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const initialUserState: IUser = {
  name: "",
  telephone: "",
  email: "",
  previousWork: [],
  education: [],
  description: "",
};

const UserContext = createContext<IUserContext>({
  user: initialUserState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});

export const useUserContext = () => useContext<IUserContext>(UserContext);
const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>(initialUserState);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
