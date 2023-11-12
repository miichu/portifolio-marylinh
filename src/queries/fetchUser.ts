import sanityClient from "../client";
import { IUser } from "../types/user";

export const fetchUser = async () => {
  try {
    const user = await sanityClient.fetch('*[_type == "user"]');
    return user;
  } catch (error) {
    throw new Error(
      `An error occurred while trying to fetch projects from sanity studio! ${error}`
    );
  }
};
