import { Tag as TagAnt } from 'antd';
import { TagProps } from './types';

const Tag = (props: TagProps): JSX.Element => {
  return (
    <TagAnt {...props}>{props.children}</TagAnt>
  )
}
export default Tag
