import {theme} from "antd";

const useTheme = () => {
  const {token} = theme.useToken();

  return {
    ...token,
  };
};

export default useTheme;
