import { Loader } from "@navikt/ds-react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ErrorBoundary>
  );
}

export default App;
