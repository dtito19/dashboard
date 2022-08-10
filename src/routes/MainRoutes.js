import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/screens/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/screens/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/screens/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/screens/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/screens/TablerIcons')));

// Custom page routing
const InfoUserList = Loadable(lazy(() => import('views/screens/UserList')));
const UserDetails = Loadable(lazy(() => import('views/screens/UserDetails')));
const TransactionList = Loadable(lazy(() => import('views/screens/TransactionList')));
const BusinessLicence = Loadable(lazy(() => import('views/screens/BusinessLicence')));
const TaxClearence = Loadable(lazy(() => import('views/screens/TaxClearence')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'userList',
                    element: <InfoUserList />
                }
            ]
        },
        {
            path: 'view',
            children: [
                {
                    path: ':userId',
                    element: <UserDetails />
                }
            ]
        },
        {
            path: 'view/:userId',
            children: [
                {
                    path: 'licence',
                    element: <BusinessLicence />
                }
            ]
        },
        {
            path: 'view/:userId',
            children: [
                {
                    path: 'clearence',
                    element: <TaxClearence />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'transaction',
                    element: <TransactionList />
                }
            ]
        },
        // {
        //     path: 'utils',
        //     children: [
        //         {
        //             path: 'util-typography',
        //             element: <UtilsTypography />
        //         }
        //     ]
        // },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        }
    ]
};

export default MainRoutes;
