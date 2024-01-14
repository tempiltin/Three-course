import React, { useState,useEffect } from "react";
import Main from "./pages/Main";
import Computer from "./pages/Computer";
import Raqamli from "./pages/Raqamli";
import Tarmoqlar from "./pages/Tarmoqlar";
import Tizimlar from "./pages/Tizimlar";
import Biznes from "./pages/Biznes"
const App = () => {
  const [page, setPage] = useState("");
  useEffect(() => {
    const savedPage = localStorage.getItem("page");
    if (savedPage) {
      setPage(savedPage);
    }
  }, []);
 
  const handleChangePage = (param) => {
    if (param !== localStorage.getItem("page")) {
      localStorage.setItem("page", param);
      setPage(param);
    }
  };
  return (
    <main>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-6">
          <button className="btn btn-danger" onClick={()=> handleChangePage("main")}>Ortga</button>
          </div>
        </div>
      </div>
      {page === "main" ? <Main handleChangePage={handleChangePage}/> : ""}
      {page === "computer" ? <Computer /> : ""}
      {page === "raqamli" ? <Raqamli /> : ""}
      {page === "tarmoq" ? <Tarmoqlar /> : ""}
      {page === "tizimlar" ? <Tizimlar /> : ""}
      {page === "biznes" ? <Biznes /> : ""}
    </main>
  );
};

export default App;
