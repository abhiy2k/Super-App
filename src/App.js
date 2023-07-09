import "./App.css";
import Home from "./components/Home";
import Stock from "./pages/Stock";
import Wave from "./Wave";
import Code from "./components/Code";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/code" element = {<Code/>}/>
          <Route path = "/stock" element = {<Stock/>}/>
          <Route path = "/wave" element = {<Wave/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


