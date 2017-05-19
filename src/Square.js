import React, {Component} from "react";
import "./Square.css";


export default class Square extends Component {
    render() {
        return (
            <div className="square" onClick={() => this.props.onClick()} style={{left:(this.props.x * 100) + "px",top:(this.props.y * 100) + "px"}}>
                {this.props.value}
            </div>
        );
    }
}