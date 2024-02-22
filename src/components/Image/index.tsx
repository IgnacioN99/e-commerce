import { Image as ImageAnt } from 'antd';
import { ImageProps } from './types';

const Image = (props: ImageProps): JSX.Element => {
    return (
        <ImageAnt {...props} />
    )
}
export default Image
