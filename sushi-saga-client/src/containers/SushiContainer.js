import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiObjs.map(sushiObj => {
            return < Sushi key={sushiObj.id} sushiData={sushiObj} eatSushi={props.eatSushi}/>
          })
        }
        <MoreButton handleMoreBtn={props.handleMoreBtn} />
        <div>
          page: {props.currentPage + 1}
        </div>
      </div>
    </Fragment>
  )
}

export default SushiContainer