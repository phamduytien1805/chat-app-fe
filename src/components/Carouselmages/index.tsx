import React from 'react';
import Slider from 'react-slick';

import 1 from 'assets/login1.jpg';

const useStyles = makeStyles()((theme) => ({
  root: {
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
  },
  imageCarousel: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
}));

function CarouselImages() {
  const { classes } = useStyles();
  const images = [login1, login2, login3];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box className={classes.root}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <Box key={i} className={classes.imageCarousel} sx={{ backgroundImage: `url(${img})` }} />
        ))}
      </Slider>
    </Box>
  );
}

export default CarouselImages;
