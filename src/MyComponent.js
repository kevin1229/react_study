import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{

    static defaultProps = {
        name: 'JH.Park',
        favoriteNumber: 4

    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                Hello~ My name is {name}. <br />
                children value is {children}. <br />
                My favorit number is {favoriteNumber}.
            </div>
        );
    }
}
/*
const MyComponent = ({ name, favoriteNumber, children }) => {

    return (
        <div>
            Hello~ My name is {name}. <br />
            children value is {children}.
            <br />
            My favorit number is {favoriteNumber}.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'JH.Park',
    favoriteNumber: 4
};

MyComponent.propTypes= {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/

export default MyComponent;