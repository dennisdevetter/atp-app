import React, { Component } from 'react';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);


export default class App extends Component {
	constructor(props)
	{
		super(props)
	}

	render() {  	
		return (
			<div><span> Hello world</span></div>
		);
	}
}