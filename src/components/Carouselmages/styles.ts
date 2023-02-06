import { Box, styled } from '@mui/material';

const CarouselContainer = styled(Box)((theme) => ({
  '& .slick-dots': {
    position: 'relative',
    bottom: theme.spacing(9.125),
    '& button::before': {
      fontSize: theme.spacing(1),
    },
    '& li': {
      width: 0,
      padding: 0,
      margin: theme.spacing(0, 1),
      '& button::before': {
        opacity: 0.4,
        color: 'white',
      },
    },
    '& li.slick-active': {
      '& button::before': {
        opacity: 1,
        color: 'white',
      },
    },
    '& button': {
      width: 0,
      height: 0,
    },
  },
}));

export { CarouselContainer };
