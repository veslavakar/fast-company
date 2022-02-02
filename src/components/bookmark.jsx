import React from 'react'
import { BookmarkHeart, BookmarkHeartFill } from 'react-bootstrap-icons'

const Bookmark = (props) => {
  return (
    <>
      {!props.isFavourite ? (
        <BookmarkHeart size={32} />
      ) : (
        <BookmarkHeartFill size={32} />
      )}
    </>
  )
}

export default Bookmark
