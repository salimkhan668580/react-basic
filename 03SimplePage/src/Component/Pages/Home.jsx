import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData([res.data]));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
     
      <center>
        {data.map((dataObj, index) => {
            console.log(dataObj)
            
          return (

            <div key={index}>
              
              
              
            </div>
          );
        })}
      </center>
    </div>
  );

}

export default Home