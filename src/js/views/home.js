import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Gamepicker from "../component/gamepicker";


export const Home = (props) => {
  const [value, setValue] = useState(""); // creating state; user text inputs in real time
  const [result, setResult] = useState([]); // stores what we get back in the array to render to the site
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.datafetcher();
  }, [value]); // triggered not every render cycle, but only when value changes

  return (
    <div className="container">
    <br />
		<h1>What are you in the mood for?</h1>
      	<Gamepicker />
    <br />
      	<div className="searchBack row">
			{store.res.map(
			(result, index) => ( // index will include key value
				<div className="searchEntry col-3 gameCard">
				<div className="card">
					<Link to={`/single/${result.slug},`} className="text-decoration-none">
					{/* ^^^  sets link destination*/}
					<img src={result.background_image} className="img-thumbnail rounded card-img-top" alt="..."/>
					{/* ^^^ displays imgs; defines img props */}
					<div className=" card-body">
						<h5 className="card-title">{result.name}</h5>
						<p className="card-text">
						{" "}
						ESRB:
						{result.esrb_rating
							? result.esrb_rating.name
							: "Rating Not available"}
						</p>
					</div>
					</Link>
				</div>
				</div>
			)
			)}
      </div>
    </div>
  );
};
