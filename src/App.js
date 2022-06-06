import "./resources/App.css";

import { Routes, Route } from "react-router-dom";

import { TheHeader } from "./components/Base/TheHeader";

import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
