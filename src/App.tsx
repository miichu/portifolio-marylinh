import { Loader } from "@navikt/ds-react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { useEffect, useMemo, useState } from "react";
import sanityClient from "./client";
import { ProjectContext } from "./context/ProjectContext";
import { UserContext, initialUserState } from "./context/UserProvider";
import { IProject } from "./types/project";
import { IUser } from "./types/user";

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [user, setUser] = useState<IUser>(initialUserState);

  const userValue = useMemo(() => ({ user, setUser }), [user]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
      name, 
      typology, 
      location, 
      type, 
      stakeholders, 
      partners, 
      mentor, 
      illustrator, 
      description
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "user"] {
      name, 
      email, 
      telephone, 
      previousWork, 
      education, 
      description
    }`
      )
      .then((data) => setUser(data))
      .catch(console.error);
  }, []);

  console.log("projects", projects, user);

  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <UserContext.Provider value={userValue ?? {}}>
        <ProjectContext.Provider value={projects ?? []}>
          <RouterProvider router={router} fallbackElement={<Loader />} />
        </ProjectContext.Provider>
      </UserContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
