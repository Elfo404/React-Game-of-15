import React, { Component } from 'react';
import Board from "./Board";
import './Game.css';
import Preload from "react-preload";

class Game extends Component {
	size = 4;
	bg = `/img/2.jpg`;
	moves=0;


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
			this.moves++;
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
		const boardSize = 400;
		const loading=<span>Loading</span>;

		return (
			<Preload
				loadingIndicator={loading}
				images={[this.bg]}>
				<div className="game">
					<div className="game-info">
						<h1>Game of 15</h1>
						<div>Moves: <b>{this.moves}</b></div>
						<ol>{/* TODO */}</ol>
					</div>
					<div className="game-board">
						<Board squares={this.state.squares}
						       width={boardSize}
						       onClick={(i) => this.handleClick(i)}
						       bg={this.bg}/>
					</div>

				</div>
			</Preload>
		);
	}
}

export default Game;
