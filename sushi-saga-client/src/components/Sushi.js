import React from 'react'

const Sushi = (props) => {

	return (
		<div className="sushi" onClick={() => props.eatSushi(props.sushiData.id)}>
			<div className="plate">
				{ props.sushiData.eaten ? null : <img src={props.sushiData.img_url} width="100%" alt="sushi" />}
			</div>
			<h4 className="sushi-details">
				{props.sushiData.name} - ${props.sushiData.price}
			</h4>
		</div>
	)
}

export default Sushi