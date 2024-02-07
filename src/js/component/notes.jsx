// import React, { useState } from "react";

// //create your first component
// const Home = () => {
// 	const [bootstrapColor, setBootstrapColor] = useState("primary")
// 		const [shouldIShowTheButton, setShouldIShowTheButton] = useState(true)
// 	return (
// 		<div className="d-flex flex-column w-100 ">
// 			<h1 className="display-1 text-white text-center mt-4 mb-5">
// 				{"Welcome"}
// 			</h1>
// 			<div className="d-flex justify-content-center">
// 				{shouldIShowTheButton === true ? (
// 					<button
// 						onClick = {(event) => {
// 							if (bootstrapColor === "success") {
// 								setBootstrapColor("primary");
// 							} else {
// 								setBootstrapColor("succcess")
// 						}
// 					}}
// 					className={`btn btn-${bootstrapColor}`}>
// 					change this button color
// 				</button>
// 			) : null}
// 			<button
// 				className="btn btn-danger"
// 				onClick= {(event) => {
// 					if(shouldIShowTheButton === true ) {
// 						setShouldIShowTheButton(false);
// 					} else {
// 						setShouldIShowTheButton(true);
// 					}
// 				}}>
// 				{shouldIShowTheButton === true ? "hide the other one" : "show the other one"}
// 			</button>	
// 			</div>		
// 		</div>		
// 	);
// };

// // export default Home;