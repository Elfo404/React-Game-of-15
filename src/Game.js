import React, { Component } from 'react';
import Board from "./Board";
import './Game.css';

class Game extends Component {
	size = 4;

	constructor() {
		super();
		let squares = Array.apply(null, { length: Math.pow(this.size, 2) - 1 }).map(Number.call, Number);
		squares.push(null);

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
		return (typeof this.state.squares[index - this.size] !== 'undefined' && this.state.squares[index - this.size] === null)
			|| (typeof this.state.squares[index + this.size] !== 'undefined' && this.state.squares[index + this.size] === null)
			|| ( typeof this.state.squares[index - 1] !== 'undefined' && this.state.squares[index - 1] === null )
			|| ( typeof this.state.squares[index + 1] && this.state.squares[index + 1] === null  );
	}

	move(i) {
		let A = this.state.squares;
		A[i] = A.splice(A.findIndex((e) => e === null), 1, A[i])[0];

		this.setState({ squares: A });
	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board squares={this.state.squares}
					       width={400}
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
