import React from "react";
import Money from "./Images/money.jpeg";
import { Link } from "react-router-dom";


const Card = ({ApiData}) => {
  const DownloadNow=(id)=>{
    console.log(id);

}
  return (
    <>
      {
    ApiData.map((curr)=>{
      return <>
      <div className="card" key={curr.id}  >
          <div className="content">
        <div className="image">
          <img src={Money} alt="" onClick={()=>DownloadNow(curr.id)}/>
        </div>
        
          <p>
            <Link to="https://drivepro.in/file/ckEEpYpmkb3">{curr.name} S5 volume 2</Link>
          </p>
        </div>
      </div>
      </>
    })
  }
    </>
  );
};

export default Card;
