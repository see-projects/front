import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import Layout from '../layout/Layout';
import Login from '../pages/login/Login';
import OauthCheckComponent from '../components/OauthCheckComponent/OauthCheckComponent';
import LoginWithEmail from '../pages/login/LoginWithEmail';

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
    {
      path: `${ROUTES.withEmail}`,
      element: (
        <Layout>
          <LoginWithEmail />
        </Layout>
      ),
    },
    {
      path: `${ROUTES.auth}`,
      element: (
        <Layout>
          <OauthCheckComponent />
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
