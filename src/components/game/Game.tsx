import React, {Component} from 'react';
import Board from './Board';
import { calculateWinner, squareToPosition } from '../../utils/functions';

type History = {
    squares: Array<string>,
    position: string,
    player: string,
}

type MyState = {
    xIsNext: boolean,
    stepNumber: number,
    history: Array<History>
}

class Game extends Component<{}, MyState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                position: "",
                player: ""
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext?"X":"O";
        this.setState({
            history: history.concat([{
                squares: squares,
                position: squareToPosition(i),
                player: this.state.xIsNext?"X":"O",
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            
        })
    }

    jumpTo (step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2) === 0,
        });
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current);

        const moves = history.map((step, move) => {
            const desc = move ? 
            'Joueur '+ step.player +' à jouer en '+ step.position +' : Revenir' :
            'Revenir au début de la partie';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)} className={move === this.state.stepNumber?"button button-active":"button button-primary"}>{desc}</button>
                </li>
            )
        });
        let status: string;
        if(winner) {
            status = winner + ' win the game !';
        } else {
            status = 'Next player : ' + (this.state.xIsNext?"X":"O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i: number) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game
