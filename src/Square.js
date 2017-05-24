import React, { Component } from "react";
import "./Square.css";


export default class Square extends Component {

	render() {
		const size = this.props.width;
		const value = this.props.value;
		return (
			<div className={'square' + (value === null ? ' empty' : '')} onClick={() => this.props.onClick()}
			     style={{
				     width: size, height: size, backgroundImage: `url(${this.props.bg})`,
				     backgroundPosition: `-${size * (value % 4)}px -${size * (parseInt(value / 4,10))}px`,
				     backgroundSize:Square.width(this.props.bg)+"%",
					 lineHeight:size+"px"
			     }}>

				{this.props.value + 1}
			</div>
		);
	}


	static width(bg) {
		// I just broke it up on newlines for readability
		let image = new Image();
		image.src=bg;

		return image.width
	}

}