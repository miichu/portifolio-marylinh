import { UserContext } from "../../.history/src/context/UserContext_20230921164514";
import { createContext } from "react";
import { IUser } from "../types/user";

export const initialUserState: IUser = {
  name: "",
  telephone: "",
  email: "",
  previousWork: [],
  education: [],
  description: "",
};

const UserContext = createContext({
  user: initialUserState, 
  setUser: () => void
});

function UserProvider({ children }) {
  const userValue = useMemo(() => ({ user, setUser }), [user]);

  const user = initialUserState;
  return (
    <UserContext.Provider value={userValue ?? {}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
