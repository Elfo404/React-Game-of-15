import React, { Component } from 'react';
import Board from "./Board";
import './Game.css';
import Square from "./Square";

class Game extends Component {
	size=4;
	constructor() {
		super();
		let squares = [];

		let i;
		for (i = 0; i < Math.pow(this.size, 2) - 1; i++) {
			squares.push({
				index: i,
				square: <Square key={i} value={i + 1} onClick={() => this.handleClick(i)}/>
			})
		}
		squares.push({ index: i, square: null });

		this.state = {
			squares: squares
		};
	}

	handleClick(i) {
		if (this.canMove(i)) {
			this.move(i);
		}
	}

	canMove(index) {
		let A = this.state.squares;
		let top = A.findIndex(e => e.index + this.size === index);
		let bottom = A.findIndex(e => e.index - this.size === index);
		let left = A.findIndex(e => e.index + 1 === index && (index + 1) % this.size !== 1);
		let right = A.findIndex(e => e.index - 1 === index && (index + 1) % this.size !== 0);

		return (typeof A[top] !== 'undefined' && A[top].square === null)
			|| (typeof A[bottom] !== 'undefined' && A[bottom].square === null)
			|| ( typeof A[left] !== 'undefined' && A[left].square === null )
			|| ( typeof A[right] !== 'undefined' && A[right].square === null  );
	}

	move(i) {
		let A = this.state.squares;
		console.log("Swapping " + A[A.findIndex(e => e.index === i)].square.props.value);

		let emptyIndex = A[A.findIndex(e => e.square === null)].index;

		A[A.findIndex(e => e.square === null)].index = A[A.findIndex(e => e.index === i)].index;
		A[A.findIndex(e => e.index === i)].index = emptyIndex;

		this.setState({ squares: A });
	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board squares={this.state.squares}
					       onClick={(i) => this.handleClick(i)}/>
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
