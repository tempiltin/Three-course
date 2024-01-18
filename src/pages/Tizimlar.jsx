import React, { useState } from "react";
import computer from "../MariaDB/tizim.json";

const Tizimlar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = async (event) => {
    const value = event.target.value;
    await setQuery(value);

     const results = await computer.filter((test) =>
         test.savol.toLowerCase().includes(value.toLowerCase())
     );
     await   setResult(results);
     
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10">
          <>
            <label htmlFor="exampleDataList" className="form-label">
              Savollarni qidirish
            </label>
            <input
              value={query}
              onChange={handleSearch}
              className="form-control p-3 mt-3"
              placeholder="Savollarni qidiring......!"
            />
            <button className="btn btn-info mt-1 wwww" onClick={()=> setQuery("")}>x</button>

          
          </>
        </div>

        <div className="col-12">
        <div className="row mt-4 justify-content-center">
                        <div className="col-lg-8">
                            <div className="box p-2">
                                {
                                    
                                        result.map((result, index) => (
                                            <div key={index}>
                                                <h3>savol:{result.savol}</h3>
                                                <h2>Javob:{result.javob}</h2>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Tizimlar;
