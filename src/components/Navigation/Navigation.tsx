import { Drawer as MuiDrawer, styled } from '@mui/material';

import { Routes } from './Routes';

import { DRAWER_WIDTH } from '../../utils/constants';

interface NavigationProps {
  open: boolean | undefined;
  handleClose: () => void;
}

export const Navigation = ({ open, handleClose }: NavigationProps) => (
  <Drawer variant='permanent' open={open} onClose={handleClose}>
    <DrawerHeader />
    <Routes />
  </Drawer>
);

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
}));
