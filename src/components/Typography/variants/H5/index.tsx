import { Title } from "@components/Typography/styles";
import { TitleProps } from "@components/Typography/types";

const H5 = ({ children, ...rest }: TitleProps): JSX.Element => {
  return (
    <Title level={5} {...rest}>
      {children}
    </Title>
  );
};

export default H5;
