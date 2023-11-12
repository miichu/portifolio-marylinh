import sanityClient from "../client";

// uses GROQ to query content: https://www.sanity.io/docs/groq
export const fetchProjects = async () => {
  try {
    const projects = await sanityClient.fetch('*[_type == "project"]');
    return projects;
  } catch (error) {
    throw new Error(
      `An error occurred while trying to fetch projects from sanity studio! ${error}`
    );
  }
};
