import { TitleProps } from '@components/Typography/types';
import { Typography } from 'antd';


const H4 = ({ children,...rest }: TitleProps): JSX.Element => {
  return (
    <Typography.Title level={4} {...rest}>{children}</Typography.Title>
  )
}
export default H4
