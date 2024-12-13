import React from 'react'
import ExpertsList from '../../Components/Admin/ExpertsList'
import ProjectsList from '../../Components/Admin/ProjectsList'
import UserList from '../../Components/Admin/UserList'
import AdminDashboard from '../../Components/Admin/AdminDashboard'
import ServiceList from '../../Components/Admin/ServiceList'
export default function Admin() {
  return (
    <div>

      <AdminDashboard />
      <ExpertsList />
      <ProjectsList />
      <ServiceList />
      <UserList />

    </div>
  )
}
