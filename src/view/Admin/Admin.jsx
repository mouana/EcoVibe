import React from 'react'
import ExpertsList from '../../Components/Admin/ExpertsList'
import ProjectsList from '../../Components/Admin/ProjectsList'
import UserList from '../../Components/Admin/UserList'
export default function Admin() {
  return (
    <div>
      <ExpertsList />
      <ProjectsList />
      <UserList />

    </div>
  )
}
