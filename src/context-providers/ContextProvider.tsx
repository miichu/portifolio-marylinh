import ProjectProvider from "./ProjectContextProvider";
import UserProvider from "./UserContextProvider";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <UserProvider>
      <ProjectProvider>{children} </ProjectProvider>
    </UserProvider>
  );
};

export default ContextProvider;
