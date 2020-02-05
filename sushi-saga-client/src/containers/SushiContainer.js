import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          //  Render Sushi components here!
          props.sushis.map(sushi => {
            // console.log(sushi)
            return <Sushi 
                sushi={sushi}
                  key={sushi.id}
                  consumeFcn={props.consumeFcn}
                  consumed={props.consumed.includes(sushi)}
            />
          
          })
        }
        <MoreButton
          moreBtnLogic={props.moreBtnLogic}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer