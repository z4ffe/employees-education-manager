import express from 'express'
import educationRoute from './education.route'
import employeeRoute from './employee.route'
const router = express.Router()

const routesList = [
   {
      path: '/employee',
      route: employeeRoute
   },
   {
      path: '/education',
      route: educationRoute
   }
]

routesList.forEach(route => router.use(route.path, route.route))

export default router
