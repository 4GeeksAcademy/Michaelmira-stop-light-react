// TrafficLight.jsx
import React from "react";

export default class TrafficLight extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            clickedLight: null,
            hasPurple: false,
        };
    }

    cycleLights = () => {
        const lights = ["red", "yellow", "green" ];
        const currentIndex = lights.indexOf(this.state.clickedLight);
        const nextIndex = (currentIndex + 1) % lights.length;
        const nextLight = lights[nextIndex];
        this.setState({ clickedLight: nextLight});
    };

    addPurple = () => {
        this.setState({ hasPurple: true});
    };

    render() {
        console.log(this.state);
        let redExtraClass = "";
        if(this.state.clickedLight === "red") redExtraClass = "selected";
        let yellowExtraClass = "";
        if(this.state.clickedLight === "yellow") yellowExtraClass = "selected";
        let greenExtraClass = "";
        if(this.state.clickedLight === "green") greenExtraClass = "selected";
        let purpleExtraClass = this.state.hasPurple ? "selected" : "";

        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="ms-5" id="trafficTop"></div>
                <div id="container">
                    <div className={"red light " + redExtraClass} onClick={() => this.setState({clickedLight: "red"})} ></div>
                    <div className={"yellow light " + yellowExtraClass} onClick={() => this.setState({clickedLight: "yellow"})}></div>
                    <div className={"green light " + greenExtraClass} onClick={() => this.setState({clickedLight: "green"})}></div>
                    {this.state.hasPurple && <div className={"purple light" + purpleExtraClass}></div>}
                </div>
                <button className="btn btn-primary m-5" onClick={this.cycleLights}>Cycle Lights
                </button>
                <button className="btn btn-secondary p-3 mt-3" onClick={this.addPurple}>Add Purple Light
                </button>
            </div>
        );
    }

}