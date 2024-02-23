import { Title } from "@components/Typography/styles";
import { TitleProps } from "@components/Typography/types";

const H1 = ({ children, ...rest }: TitleProps): JSX.Element => {
  return (
    <Title level={1} {...rest}>
      {children}
    </Title>
  );
};
export default H1;
