import React from 'react'
import Qualities from './qualities'
import Bookmark from './bookmark'

const User = (props) => {
  return (
    <tr key={props.user._id}>
      <td>{props.user.name}</td>
      <td>
        <Qualities
          user={props.user}
          colorsOfQualities={props.colorsOfQualities}
        />
      </td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate}/5</td>
      <td>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => props.handleAddToFavourite(props.user._id)}
        >
          <Bookmark isFavourite={props.user.isFavourite} />
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.handleDelete(props.user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  )
}

export default User
