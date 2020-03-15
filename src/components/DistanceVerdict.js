import React from 'react';

const DistanceVerdict = ({ kilometre }) => {
	return	kilometre >= 0 ? <p>Distance in metres is {kilometre*1000} and in feet is {kilometre*100000/2.54}</p>:'dd';
};

export default DistanceVerdict;