import { HomePage, TasksPage, ProfilePage } from './pages';


import { withNavigationWatcher } from './contexts/navigation';
import { pagesAndRoutes } from './app-navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    }
];

const pageRoutes = pagesAndRoutes.map(page => (
    {
        path: page.route,
        title: page.name,
        element: page.component
    }
)
);


export default pageRoutes.map(route => {
    console.log(pageRoutes)
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
