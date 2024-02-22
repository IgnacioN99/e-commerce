import { TitleProps } from '@components/Typography/types';
import { Typography } from 'antd';


const H1 = ({ children, ...rest }: TitleProps): JSX.Element => {
  return (
    <Typography.Title level={1} {...rest}>{children}</Typography.Title>
  )
}
export default H1
