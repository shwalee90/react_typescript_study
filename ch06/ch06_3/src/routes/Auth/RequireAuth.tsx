import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

type RequireAuthProps = {};

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({ children }) => {
  const { loggedUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser) navigate(-1); //허가 되지 않은 사용자 :이전페이지로 돌아감
  }, [loggedUser, navigate]);

  return <> {children}</>;
};

export default RequireAuth;
