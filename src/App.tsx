import "./App.css";
import Header from "./components/nav/Header";
import Biography from "./pages/biography/Biography";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
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
