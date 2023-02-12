import { forwardRef } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import { ButtonProps } from './props';
import { CButton } from './styles';

// eslint-disable-next-line react/display-name
const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, variant = 'contained', ...rest }, ref) => (
    <CButton
      ref={ref}
      disableRipple
      disabled={loading || disabled}
      variant={variant}
      startIcon={loading && <CircularProgress color='inherit' size={16} />}
      {...rest}
    />
  )
);
export default MyButton;
