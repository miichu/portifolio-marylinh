import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Biography from "./pages/biography/Biography";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mary Linh sin portifolio</h1>
      <div className="card">
        <p>
          This gonna be the best portifolio that no mofo senior architects and
          deny and ever be meanies to my precious cousin ever again{" "}
        </p>
      </div>
      <Home />
      <Biography />
    </>
  );
};

export default App;
