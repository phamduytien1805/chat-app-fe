import React from 'react';
import CButton from './CButton';
import { Box, CircularProgress } from '@mui/material';
import CIcon from './CIcon';
type Props = {};

const Demo = (props: Props) => (
  <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={2} gap={2}>
    <CButton variant='contained' size='large' loading={true} endIcon={<CIcon icon='info' />}>
      {'asdasd'}
    </CButton>
    <CButton variant='contained' size='medium' endIcon={<CIcon icon='info' />}>
      {'asdasd'}
    </CButton>
    <CButton variant='contained' size='small'>
      {'asdasd'}
    </CButton>
  </Box>
);

export default Demo;
