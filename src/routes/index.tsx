import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes as Router, Route, Navigate } from "react-router-dom";
import routes from './routes';

const Routes: React.FC = () => {

    const [routeComponent, setRouteComponent] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        let newRouteComponent: React.ReactElement[] = []
        const getRoute = (routes?: any, path?: string) => {
            for(let i=0; i < routes.length; i++) {
                let route = routes[i];
                let Component = route.Component;
                let newpath = path ? path + route.path : route.path;
                if (Component) {
                    newRouteComponent.push(<Route key={newpath} path={newpath} element={<Component />} />);
                }
                if(route.children.length) {
                    getRoute(route.children, newpath);
                }
            }
        }
        getRoute(routes)
        setRouteComponent(newRouteComponent)
    }, [])

    return <BrowserRouter>
        <Router>
            {routeComponent}
        </Router>
    </BrowserRouter>
}

export default Routes;