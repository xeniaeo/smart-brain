import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {

	/*
	var outerDiv = document.createElement('div');
	for (var i = 0; i < box.faceCount; i++){
		var topRow = box.regions[i].region_info.bounding_box.top_row * box.height;
		var rightCol = box.width - box.regions[i].region_info.bounding_box.right_col * box.width;
		var bottomRow = box.height - box.regions[i].region_info.bounding_box.bottom_row * box.height;
		var leftCol = box.regions[i].region_info.bounding_box.left_col * box.width;
		var innerDiv = document.createElement('div');
		innerDiv.className='bounding-box';
		innerDiv.setAttribute("style", `top: ${topRow}, right: ${rightCol}, bottom: ${bottomRow}, left: ${leftCol}`)
		outerDiv.appendChild(innerDiv);
	}
	console.log(outerDiv);
	*/

	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	)
}

export default FaceRecognition;