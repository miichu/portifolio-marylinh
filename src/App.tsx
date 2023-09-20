import { Loader } from "@navikt/ds-react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { useEffect, useState } from "react";
import sanityClient from "./client";

function App() {
  const [projects, setProjects] = useState(null);

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
  }, []);

  console.log("projects", projects);

  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ErrorBoundary>
  );
}

export default App;
