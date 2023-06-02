import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path="/home" element = {<Home />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/socials" element = {<Socials />} />
          <Route path="*" element = {<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
