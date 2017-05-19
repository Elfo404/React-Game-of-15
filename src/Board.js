import React, { Component } from "react";
import "./Board.css"
import Square from "./Square";

class Board extends Component {
	renderSquare(v, k) {
		const size = Math.sqrt(this.props.squares.length);
		return <Square key={v} value={v} onClick={() => this.props.onClick(k)} y={parseInt(k / size, 0)}
		               x={k % size}/>
	}

	render() {
		return (
			<div>
				<div className="board">
					{this.props.squares.map((object, i) => {
						return object.square ? this.renderSquare(object.square.props.value, object.index) : null
					})}
				</div>
			</div>
		);
	}
}


export default Board;