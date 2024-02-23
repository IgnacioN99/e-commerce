import { Title } from "@components/Typography/styles";
import { TitleProps } from "@components/Typography/types";

const H2 = ({ children, ...rest }: TitleProps): JSX.Element => {
  return (
    <Title level={2} {...rest}>
      {children}
    </Title>
  );
};
export default H2;
