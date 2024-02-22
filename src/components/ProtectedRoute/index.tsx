import {type PropsWithChildren, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const ProtectRoute = (props: PropsWithChildren): JSX.Element => {
  const checkMethod = (): boolean => {
    // TODO change this method
    return true;
  };
  const navigate = useNavigate();
  useEffect(() => {
    const loginCheck = checkMethod();

    if (!loginCheck) {
      navigate("/login");
    }
  }, []);

  return <>{props.children}</>;
};

export default ProtectRoute;
