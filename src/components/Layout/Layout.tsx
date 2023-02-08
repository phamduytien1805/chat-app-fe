import { FC, ReactNode, useState } from 'react';
import { Box } from '@mui/material';

import { Navigation } from '../Navigation';
import { Header } from '../Header';
import { Footer } from '../Footer';

import { FOOTER_HEIGHT } from '../../utils/constants';

interface Props {
  children: ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => setOpen((status) => !status);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* <Box component='header'>
          <Header toggleNavigation={toggleNavigation} />
        </Box> */}
      {/* <Navigation open={open} handleClose={toggleNavigation} /> */}
      {/* <Box component='main' sx={{ flexGrow: 1, p: 3, pt: 10 }}> */}
      {children}
      {/* </Box> */}
    </Box>
  );
};
