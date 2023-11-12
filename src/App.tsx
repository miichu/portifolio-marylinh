import { Loader } from "@navikt/ds-react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { useEffect } from "react";
import { useProjectContext } from "./context-providers/ProjectContextProvider";
import { useUserContext } from "./context-providers/UserContextProvider";
import { useQueries } from "react-query";
import { fetchProjects } from "./queries/fetchProjects";
import { fetchUser } from "./queries/fetchUser";
import { mapResponseToUser } from "./queries/mapUser";
import { mapResponseToProjects } from "./queries/mapProjects";

function App() {
  const { projects, setProjects } = useProjectContext();
  const { user, setUser } = useUserContext();

  const [projectsData, userData] = useQueries([
    {
      queryKey: ["projects"],
      queryFn: fetchProjects,
      suspense: true,
    },
    {
      queryKey: ["statuses"],
      queryFn: fetchUser,
      suspense: true,
    },
  ]);

  useEffect(() => {
    if (projectsData.data && !projectsData.isLoading && projects.length === 0) {
      const mappedProjects = mapResponseToProjects(projectsData.data);
      setProjects(mappedProjects);
    }

    if (userData.data && !projectsData.isLoading && user.name === "") {
      const mappedUser = mapResponseToUser(userData.data[0]);
      setUser(mappedUser);
    }
  }, [projectsData, userData, setUser, setProjects]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ErrorBoundary>
  );
}

export default App;
