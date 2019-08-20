import React, {Component} from 'react';
import FirstChildComponent from './FirstChildComponent';
import './ParentComponent.css';

class ParentComponent extends Component{
	render(){
		return(
		<div className="ParentComponent">
			<p>I'm the Parent Component!</p>
			<img alt="logo" src={require('./img/logo.png')}/>
			<FirstChildComponent/>
		</div>
		);
	}
}


export default ParentComponent;