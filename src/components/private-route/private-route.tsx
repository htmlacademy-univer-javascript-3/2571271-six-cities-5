import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../constants/constants';

type PrivateRouteProps = {
  authStatus: AuthStatus;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authStatus } = props;
  return (authStatus === AuthStatus.NotAuth ?
    <Navigate to={AppRoutes.Login}></Navigate> :
    <Outlet></Outlet>
  );
}

export default PrivateRoute;
