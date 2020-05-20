import React from 'react'

import UsersList from '../components/UsersLists'

const Users = () => {
   const USERS = [{id: 'p1', name: 'Salezy', image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg', places: 1}]

  return <UsersList items={USERS}/>
}

export default Users