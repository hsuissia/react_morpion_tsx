import React, {Component} from 'react';
import Board from './Board';
import { calculateWinner, squareToPosition } from '../../utils/functions';

type History = {
    squares: Array<string>,
    position: string,
    player: string,
}

type MyState = {
    order: string,
    xIsNext: boolean,
    stepNumber: number,
    history: Array<History>
}

class Game extends Component<{}, MyState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(""),
                position: "",
                player: ""
            }],
            xIsNext: true,
            stepNumber: 0,
            order: "ASC",
        };
    }

    handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).gagnant || squares[i]!== "") {
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

    newGame () {
        this.setState({
            history: [{
                squares: Array(9).fill(""),
                position: "",
                player: ""
            }],
            xIsNext: true,
            stepNumber: 0,
            order: "ASC",
        });

         return null;
    }

    reversed () {
        this.setState({
            history: this.state.history.reverse(),
            order: this.state.order==="ASC"?"DESC":"ASC"
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const squares = current.squares.slice();
        
        const moves = history.map((step, move) => {
            const desc = move ? 
            'Joueur '+ step.player +' à jouer en '+ step.position :
            'Début de la partie';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)} className={move === this.state.stepNumber?"button button-active mr-5":"button button-primary mr-5"}>Voir</button>{desc}
                </li>
            )
        });

        let status: string;
        if(winner.gagnant) {
            status = winner.gagnant + ' win the game !';
        } else {
            if (current.squares.includes("")) {
                status = 'Next player : ' + (this.state.xIsNext?"X":"O");
            } else {
                status = 'Match NUL !';
            }
            
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        comboGagnant={winner.comboGagnant}
                        onClick={(i: number) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>
                        {status}
                        <button className={"button ml-5"} onClick={() => this.reversed()}>Ordre</button>
                        <button className={"button button-active ml-5"} onClick={() => this.newGame()}>Redémarrer la partie</button>
                    </div>
                    <ul>{moves}</ul>
                </div>
            </div>
        );
    }
}

export default Game
