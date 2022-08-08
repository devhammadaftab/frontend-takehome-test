import { SubRoutes, RoutesConstent } from 'constants/routes'
import { Pernsoal, Employee } from 'pages/information'
import Empty from 'pages/empty'

const routes = [{
    path: RoutesConstent.information,
    Component: null,
    children: [{
        path: SubRoutes.personal,
        Component: Pernsoal,
        children: []
    }, {
        path: SubRoutes.employee,
        Component: Employee,
        children: []
    }]
}, {
    path: RoutesConstent.notFound,
    Component: Empty,
    children: []
}]

export default routes