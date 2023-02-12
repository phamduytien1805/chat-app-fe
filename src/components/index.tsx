import React from 'react';
import CButton from './CButton';
import { Box, CircularProgress } from '@mui/material';
import CIcon from './CIcon';
type Props = {};

const Demo = (props: Props) => (
  <Box display={'flex'} justifyContent={'center'} mt={2}>
    <CButton variant='contained' size='large' loading={true} endIcon={<CIcon icon='info' />}>
      {'asdasd'}
    </CButton>
  </Box>
);

export default Demo;
