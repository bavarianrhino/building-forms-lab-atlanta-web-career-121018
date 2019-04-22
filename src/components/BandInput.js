// Add BandInput component
import React, { Component } from 'react';
// import { connect } from 'react-redux';


class BandInput extends Component {

	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBand(this.state);
		this.setState({
			text: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type='text' onChange={this.handleChange} value={this.state.text} />
					<input type='submit' />
				</form>
			</div>
		);
	}
};

// const mapDispatchToProps = (dispatch) => ({
//     addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
// })

export default BandInput;


