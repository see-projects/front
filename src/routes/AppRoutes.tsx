import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import Layout from '../layout/Layout';
import Login from '../pages/Login';

const AppRoutes = () => {
  const routeList = [
    { path: `${ROUTES.main}` },
    {
      path: `${ROUTES.login}`,
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
  ];

  const newRouteList = routeList.map((item) => {
    return {
      ...item,
    };
  });

  const router = createBrowserRouter(newRouteList);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
