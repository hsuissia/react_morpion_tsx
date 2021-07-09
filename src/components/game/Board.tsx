import React, {Component} from 'react';
import Square from './Square';

type MyProps = {
    squares: Array<string>,
    comboGagnant: number[],
    onClick: (i: number) => void;
};
class Board extends Component<MyProps, {}> {
    renderSquare(i: number) {
        return 
    }
  
    render() {
        const row = [0,3,6];
        const col = [0,1,2];
        return (
            <div>
                {row.map((r:number) => (
                    <div key={r} className="board-row">
                        {col.map((c:number) => (
                            <Square 
                                key={c+r}
                                value={this.props.squares[c+r]}
                                winning={this.props.comboGagnant.includes(c+r)}
                                onClick={() => { this.props.onClick(c+r) }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Board
