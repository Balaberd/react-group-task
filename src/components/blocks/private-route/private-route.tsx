import { Navigate } from "react-router";
import { AppRoutes } from "../../../lib/types/AppRoutes";

type TProps = {
  children: JSX.Element,
  isAuth: boolean,
}

const PrivateRoute = ({ children, isAuth }: TProps) => {
  return (
    isAuth
      ? children
      : <Navigate to={AppRoutes.Main} />
  )
}


export default PrivateRoute;