import "./resources/App.css";

import { Routes, Route } from "react-router-dom";

import { TheHeader } from "./components/Base/TheHeader";

import { Home, Login, Portfolio, Team, Us } from "./pages";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/team" element={<Team></Team>} />
        <Route path="/us" element={<Us></Us>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
      </Routes>
    </div>
  );
}

export default App;
