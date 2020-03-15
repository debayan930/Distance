import React, { Component } from 'react';
import 'tachyons';
import DistanceInput from '../components/DistanceInput';
import DistanceVerdict from '../components/DistanceVerdict';

class DistanceConverter extends Component{
	constructor(props){
		super(props);
		this.state = {
			distance: '',
			scale: 'km'
		}
		this.handleKmChange = this.handleKmChange.bind(this);
		this.handleMileChange = this.handleMileChange.bind(this);
	}

	handleKmChange = (distance) => {
		this.setState({ scale: 'km', distance });
	}

	handleMileChange =(distance) => {
		this.setState({ scale: 'mi', distance });
	}

	tryToConvert(distance, convert){
		const input = parseFloat(distance);
		if(Number.isNaN(input)){
			return '';
		}

		return convert(input);
	}

	toKilometre = (distance) => {
		return distance*1.6;
	}

	toMile =(distance) => {
		return distance/1.6;
	}

	render(){
		const { scale, distance } = this.state;
		const kilometre = scale === 'mi' ? this.tryToConvert(distance, this.toKilometre) : distance;
		const mile = scale === 'km' ? this.tryToConvert(distance, this.toMile) : distance;

		return(
			<div className='tc'>
				<DistanceInput
					scale='km'
					distance={kilometre}
					onDistanceChange={this.handleKmChange}
				/>

				<DistanceInput
					scale='mi'
					distance={mile}
					onDistanceChange={this.handleMileChange}
				/>

				<DistanceVerdict
					distance={parseFloat(kilometre)}
				/>
			</div>
		);
	}
};

export default DistanceConverter;