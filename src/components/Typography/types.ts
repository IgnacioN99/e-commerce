import { TitleProps as TitlePropsAnt } from 'antd/es/typography/Title';
import { TextProps as TextPropsAntd } from 'antd/es/typography/Text';
import { CSSProperties, type PropsWithChildren } from 'react';

export interface TitleProps extends PropsWithChildren<TitlePropsAnt> {
    style?: CSSProperties;
}

export interface TextProps extends PropsWithChildren<TextPropsAntd> {
    style?: CSSProperties;
}
