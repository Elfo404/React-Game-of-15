import React, { Component } from "react";
import "./Square.css";


export default class Square extends Component {
	render() {
		const size = this.props.width;
		const value=this.props.value;
		console.log(size*(value%4));
		return (
			<div className={'square' + (value === null ? ' empty' : '')} onClick={() => this.props.onClick()}
			     style={{ width: size, height: size,backgroundImage:`url('./img/2.jpg')`,
			     backgroundPosition:`-${size*(value%4)}px -${size*(parseInt(value/4))}px`}} >

				{this.props.value + 1}
			</div>
		);
	}
}