import { getTomosData } from "./utils/tomosController";
import { useState, useEffect } from "react";
import TomoComponent from "./components/TomoComponent";

function App() {
  const [tomosData, setTomosData] = useState([]);

  const reviewTomosData = async () => {
    const data = await getTomosData();
    if (data) {
      setTomosData(data);
      console.log(data);
    } else {
      console.log("no data");
    }
  };

  useEffect(() => {
    reviewTomosData();
  }, []);

  return (
    <>
    <h2>Hola</h2>
      {tomosData.length > 0 ? (
        <div className="container">
          <div className="row">
            {tomosData.map((tomo) => (
              <div key={tomo.tomoIndex} className="col-md-4">
                <TomoComponent tomo={tomo} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        "No data"
      )}
    </>
  );
}

export default App;
