import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../constants/constants';
import { useAppSelector } from '../../store/hooks';

function PrivateRoute() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return authStatus === AuthStatus.Auth ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
