import React, { Component } from "react";
import "./Square.css";


export default class Square extends Component {
	render() {
		const size = this.props.width;
		return (
			<div className={'square' + (this.props.value === null ? ' empty' : '')} onClick={() => this.props.onClick()}
			     style={{ width: size, height: size }}>
				{this.props.value + 1}
			</div>
		);
	}
}