import { Title } from "@components/Typography/styles";
import { TitleProps } from "@components/Typography/types";

const H4 = ({ children, ...rest }: TitleProps): JSX.Element => {
  return (
    <Title level={4} {...rest}>
      {children}
    </Title>
  );
};
export default H4;
