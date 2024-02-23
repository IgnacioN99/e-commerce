import { TextProps } from "@components/Typography/types";
import { Text } from "@components/Typography/styles";
const Body = ({ children, ...rest }: TextProps): JSX.Element => {
  return <Text {...rest}>{children}</Text>;
};
export default Body;
