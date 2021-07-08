import React, {Component} from 'react';

type MyProps = {
    value: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
class Square extends Component<MyProps, {}> {
    render() {
        return (
            <button 
                className="square" 
                onClick={this.props.onClick}
            >
            {this.props.value}
            </button>
        );
    }
}

export default Square
