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

export const UserContext = createContext<IUser>(initialUserState);
