import React from "react";

const Main = ({handleChangePage}) => {
  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-12 col-sm-7">
          <ul className="nav flex-column">
            <li className="nav-item m-1">
                <button onClick={()=> handleChangePage("computer")} className="btn btn-primary">Kompyuter arxitekturasi</button>
            </li>
            <li className="nav-item  m-1">
                <button onClick={()=> handleChangePage("tizimlar")} className="btn btn-primary">Tizimlar va signallar</button>
            </li>
            <li className="nav-item  m-1">
                <button onClick={()=> handleChangePage("raqamli")} className="btn btn-primary">Raqamli qurilmalar</button>
            </li>
            <li className="nav-item  m-1">
                <button onClick={()=> handleChangePage("tarmoq")} className="btn btn-primary">Kompyuter tarmoqlari</button>
            </li>
            <li className="nav-item  m-1">
                <button onClick={()=> handleChangePage("biznes")} className="btn btn-primary">Biznes Boshqaruvi</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
