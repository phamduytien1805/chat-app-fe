import { forwardRef } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import { ButtonProps } from './props';
import { CButton } from './styles';

// eslint-disable-next-line react/display-name
const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, variant = 'contained', size = 'large', startIcon, endIcon, ...rest }, ref) => {
    if (loading && (startIcon || endIcon)) {
      startIcon = <CircularProgress variant='indeterminate' color='inherit' size={16} />;
      endIcon = endIcon && null;
    }
    return (
      <CButton
        ref={ref}
        disableRipple
        disabled={loading || disabled}
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        {...rest}
      />
    );
  }
);
export default MyButton;
