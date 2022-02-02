import React, { useState } from 'react'
import api from '../api'
import SearchStatus from './searchStatus'
import User from './user'
import Users from './users'

const App = () => {
  const [users, setUsers] = useState(
    api.users.fetchAll().map((user) => ({ ...user, isFavourite: false }))
  )

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const renderPhrase = (number) => {
    return <SearchStatus number={number} />
  }

  const colorsOfQualities = (obj) => {
    let classesOfQualities = 'm-2 badge bg-'
    classesOfQualities += `${obj.color}`
    return classesOfQualities
  }

  const handleAddToFavourite = (userId) => {
    setUsers(prevState => prevState.map((user) => ({
        ...user,
        isFavourite: user._id === userId ? !user.isFavourite : user.isFavourite
    })))
  }

  const usersTable = () =>
    users.map((user) => {
      return (
        <User
          key={user._id}
          user={user}
          colorsOfQualities={colorsOfQualities}
          handleDelete={handleDelete}
          handleAddToFavourite={handleAddToFavourite}
        />
      )
    })

  return (
    <Users renderPhrase={renderPhrase} users={users} usersTable={usersTable} />
  )
}

export default App
