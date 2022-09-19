enum Routes {
  AUTH = 'auth',
  CORE = 'core',

  MANAGER = 'manager',
  DEV = 'dev',

  PROFILE = 'profile',

  SIGNIN = 'signin',
  SIGNUP = 'signup',

  MANAGER_DASHBOARD = 'manager_dashboard',
  MANAGE_PROJECTS = 'manage_projects',
  MANAGE_BUGS_MANAGER = 'manage_bugs_manager',
  MANAGE_TASKS_MANAGER = 'manage_tasks_manager',
  MANAGE_SKILLS = 'manage_skills',

  DEV_DASHBOARD = 'dev_dashboard',
  MANAGE_BUGS_DEV = 'manage_bugs_dev',
  MANAGE_TASKS_DEV = 'manage_tasks_dev',
}

export const routesSetting = {
  auth: Routes.AUTH,
  core: Routes.CORE,
  manager: Routes.MANAGER,
  dev: Routes.DEV,
  profile: Routes.PROFILE,
  signin: Routes.SIGNIN,
  signup: Routes.SIGNUP,

  manager_dashboard: { name: Routes.MANAGER_DASHBOARD, icon: '' },
  manage_project: { name: Routes.MANAGE_PROJECTS, icon: '' },
  manage_bugs_manager: { name: Routes.MANAGE_BUGS_MANAGER, icon: '' },
  manage_tasks_manager: { name: Routes.MANAGE_TASKS_MANAGER, icon: '' },
  manage_skills: { name: Routes.MANAGE_SKILLS, icon: '' },

  dev_dashboard: { name: Routes.DEV_DASHBOARD, icon: '' },
  manage_bugs_dev: { name: Routes.MANAGE_BUGS_DEV, icon: '' },
  manage_tasks_dev: { name: Routes.MANAGE_TASKS_DEV, icon: '' },
}
