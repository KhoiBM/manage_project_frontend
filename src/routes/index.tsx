import { Routes, Route } from 'react-router-dom'
import NoMatch from '@/components/base/NoMatch'
import SignInPage from '@/pages/auth/SignInPage'
import SignUpPage from '@/pages/auth/SignUpPage'
import ManageProjectsPage from '@/pages/core/manager/ManageProjectsPage'
import ManageProfilePage from '@/pages/core/base/ManageProfilePage'
import ManangeBugsManagerPage from '@/pages/core/manager/ManangeBugsManagerPage'
import ManangerDashboardPage from '@/pages/core/manager/ManangerDashboardPage'
import ManangeTasksManagerPage from '@/pages/core/manager/ManangeTasksManagerPage'
import DevDashBoardPage from '@/pages/core/dev/DevDashBoardPage'
import ManageBugsDevPage from '@/pages/core/dev/ManageBugsDevPage'
import ManageTasksDevPage from '@/pages/core/dev/ManageTasksDevPage'
import DevLayout from '@/components/extra/DevLayout'
import ManagerLayout from '@/components/extra/ManagerLayout'
import { routesSetting } from '@/config'

export const AppRouting = () => {
  const routes = routesSetting
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignInPage />} />

        <Route path={routes.auth}>
          <Route index element={<SignInPage />} />
          <Route path={routes.signin} element={<SignInPage />} />
          <Route path={routes.signup} element={<SignUpPage />} />
        </Route>

        <Route path={routes.core}>
          <Route path={routes.manager} element={<ManagerLayout />}>
            <Route index element={<ManangerDashboardPage />} />
            <Route path={routes.manager_dashboard.name} element={<ManangerDashboardPage />} />
            <Route path={routes.manage_project.name} element={<ManageProjectsPage />} />
            <Route path={routes.manage_bugs_manager.name} element={<ManangeBugsManagerPage />} />
            <Route path={routes.manage_tasks_manager.name} element={<ManangeTasksManagerPage />} />
            {/* <Route path={routes.manage_skills.name} element={<ManangeSkillsPage />} /> */}
            {/* <Route path={routes.manage_devs.name} element={<ManangeDevsPage />} /> */}
            <Route path={routes.profile} element={<ManageProfilePage />} />
          </Route>

          <Route path={routes.dev} element={<DevLayout />}>
            <Route index element={<DevDashBoardPage />} />
            <Route path={routes.dev_dashboard.name} element={<DevDashBoardPage />} />
            <Route path={routes.manage_bugs_dev.name} element={<ManageBugsDevPage />} />
            <Route path={routes.manage_tasks_dev.name} element={<ManageTasksDevPage />} />
            <Route path={routes.profile} element={<ManageProfilePage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
