import { SubRoutes, RoutesConstent } from 'constants/routes'
import { Personal, Employee } from 'pages/information'
import Empty from 'pages/empty'

const routes = [{
    path: RoutesConstent.information,
    Component: null,
    children: [{
        path: SubRoutes.personal,
        Component: Personal,
        children: []
    }, {
        path: SubRoutes.employee,
        Component: Employee,
        children: []
    }]
}, {
    path: RoutesConstent.notFound,
    Component: Personal,
    children: []
}]

export default routes