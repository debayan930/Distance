import React, { Component } from 'react';

class DistanceInput extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.props.onDistanceChange(event.target.value);
	}

	render(){
		const { scale, distance } = this.props;
		return(
			<div className='tc'>
				<label htmlFor="distance">Enter distance in {scale === 'km' ? 'Kilometres' : 'Miles'}</label>
				<input
					type="number"
					value={distance}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
};

export default DistanceInput;