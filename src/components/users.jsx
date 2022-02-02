import React from "react";

const Users = (props) => {
    return (
        <>
      {props.renderPhrase(props.users.length)}
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th className="col-md-auto">Качества</th>
            <th>Профессия</th>
            <th>Встретился, раз</th>
            <th>Оценка</th>
            <th>Избранное</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{props.usersTable()}</tbody>
      </table>
    </>
    )
}

export default Users