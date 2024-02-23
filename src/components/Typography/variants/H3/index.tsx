import { Title } from "@components/Typography/styles";
import { TitleProps } from "@components/Typography/types";

const H3 = ({ children, ...rest }: TitleProps): JSX.Element => {
  return (
    <Title level={3} {...rest}>
      {children}
    </Title>
  );
};
export default H3;
