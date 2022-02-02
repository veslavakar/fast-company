import React from "react"

const Qualities = (props) => {
    return (props.user.qualities.map((el) => (
        <div key={el._id} className={props.colorsOfQualities(el)}>
          {el.name}
        </div>
      ))
    )
}

export default Qualities