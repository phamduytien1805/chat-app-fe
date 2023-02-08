import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { ImageBox } from './styles';

interface Props {
  imgUrl: string;
  height?: string;
}

export const Image: FC<Props> = ({ imgUrl, height }) => <ImageBox imgUrl={`url(${imgUrl})`} height={height} />;
