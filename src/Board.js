import React, { Component } from "react";
import "./Board.css"
import Square from "./Square";
import FlipMove from 'react-flip-move';

class Board extends Component {
	renderSquare(value, index) {
		const size = Math.sqrt(this.props.squares.length);
		return <Square key={value} value={value} onClick={() => this.props.onClick(index)} y={parseInt(index / size, 0)}
		               x={index % size} width={(this.props.width/size)}/>
	}

	render() {
		return (
			<div>
				<div className="board" style={{width:this.props.width}}>
					<FlipMove duration={400} easing="ease-out">
						{this.props.squares.map((value, index) => {
							return this.renderSquare(value, index)
						})}
					</FlipMove>
				</div>
			</div>
		);
	}
}


export default Board;