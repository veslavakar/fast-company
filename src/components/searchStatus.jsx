import React from 'react'
const SearchStatus = (props) => {
  let numOfPeoplePhrase
  let lastDigit = props.number % 10
  if (props.number === 0) {
    return (
      <h3>
        <div className="badge bg-danger">Никто не тусанет с тобой сегодня</div>
      </h3>
    )
  } else {
    if (
      (lastDigit !== 2 && lastDigit !== 3 && lastDigit !== 4) ||
      (props.number > 11 && props.number <= 19)
    ) {
      numOfPeoplePhrase = ' человек'
    } else {
      numOfPeoplePhrase = ' человека'
    }
    return (
      <h3>
        <div className="badge bg-primary">
          {props.number}
          {numOfPeoplePhrase} тусанет с тобой сегодня{' '}
        </div>
      </h3>
    )
  }
}

export default SearchStatus
