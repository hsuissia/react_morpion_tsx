import React, {Component} from 'react';

type MyProps = {
    value: string,
    winning: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
class Square extends Component<MyProps, {}> {
    render() {
        return (
            <button 
                className={this.props.winning?"winning-case square":"square"} 
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square
