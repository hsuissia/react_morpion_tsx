import React, {Component} from 'react';
import Square from './Square';

type MyProps = {
    squares: Array<string>,
    onClick: (i: number) => void;
};
class Board extends Component<MyProps, {}> {
    renderSquare(i: number) {
        return <Square 
            value={this.props.squares[i]}
            onClick={() => { this.props.onClick(i) }}
        />;
    }
  
    render() {
        const row = [0,3,6];
        const col = [0,1,2];
        return (
            <div>
                {row.map((r:number) => (
                    <div className="board-row">
                        {col.map((c:number) => (
                            this.renderSquare(c+r)
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Board
