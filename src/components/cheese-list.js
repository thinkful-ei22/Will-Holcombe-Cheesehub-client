import React from 'react';
import {connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';
 //take props out when making class?
//must be stateful in order to access lifecycle functions
//export function CheeseList(props){ 

export  class CheeseList extends React.Component { 
 

    componentDidMount(){
        console.log('Component did mount');
        this.props.dispatch(fetchCheeses());
    }
      
      render(){ 
    const cheeseListItems = this.props.cheeses.map((cheese, index) => (
        <li key={index}>
        {cheese}
        </li>
    ));

    return (
         <ul>
             {cheeseListItems}
          </ul>
    );
}
}

export const mapStateToProps = state => ({
    cheeses: state.cheeses
})
export default connect(mapStateToProps)(CheeseList);