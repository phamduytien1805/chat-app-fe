import { Button, Theme, styled } from '@mui/material';
import typography from '../../styles/customTheme/typography';
import { DARK_MODE_THEME } from '../../utils/constants';
const getColorByMode = (mode: string) => {};
const getElevationByMode = (mode: string) => {};
const getPaddingBySize = (theme: Theme, size?: string) => {
  switch (size) {
    case 'small':
      return theme.spacing(0.75, 1.5);
    case 'medium':
      return theme.spacing(1, 1.5);
    case 'large':
      return theme.spacing(1.5, 3);
    default:
      return theme.spacing(1, 1);
  }
};
const getDisabledColor = (theme: Theme, variant?: string) => {
  switch (variant) {
    case 'contained':
      return theme.palette.mode === DARK_MODE_THEME ? theme.modeColors.primary[100] : theme.modeColors.primary[30];
    case 'outlined':
    case 'text':
      return theme.modeColors.primary[10];
    default:
      return theme.modeColors.primary[30];
  }
};

const CButton = styled(Button)<Record<string, any>>(({ theme, size, variant, loading }) => ({
  borderRadius: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: getPaddingBySize(theme, size),
  '&.MuiButton-contained': {
    backgroundColor: theme.modeColors.primary[100],
    color: theme.colors.white,
    '&:hover': {
      backgroundColor: theme.modeColors.primary[80],
      boxShadow: theme.elevations.lightDepth01,
    },
    '&:active': {
      backgroundColor: theme.modeColors.primary[90],
    },
  },
  '&.MuiButton-outlined': {
    backgroundColor: theme.modeColors.primary[10],
    color: theme.palette.mode === DARK_MODE_THEME ? theme.modeColors.primary[60] : theme.colors.black,
    border: `1px solid ${theme.modeColors.primary[60]}`,
    '&:hover': {
      backgroundColor: theme.palette.mode !== DARK_MODE_THEME && theme.modeColors.primary[20],
      boxShadow: theme.elevations.lightDepth01,
    },
    '&:active': {
      backgroundColor: theme.modeColors.primary[30],
    },
  },
  '&.MuiButton-text': {
    backgroundColor: theme.modeColors.primary[10],
    border: 'none',
    color: theme.palette.mode === DARK_MODE_THEME ? theme.modeColors.primary[60] : theme.colors.black,
    '&:hover': theme.palette.mode !== DARK_MODE_THEME && {
      backgroundColor: theme.modeColors.primary[20],
    },
    '&:active': theme.palette.mode !== DARK_MODE_THEME && {
      backgroundColor: theme.modeColors.primary[30],
    },
  },
  '&.Mui-disabled': {
    borderColor: variant === 'outlined' ? `${theme.modeColors.primary[30]} !important` : 'unset',
    color: theme.palette.mode !== DARK_MODE_THEME && theme.modeColors.primary[60],
    opacity: theme.palette.mode === DARK_MODE_THEME && !loading && variant === 'contained' && 0.6,
    backgroundColor: !loading && getDisabledColor(theme, variant),
    '& .MuiButton-startIcon': {
      color: theme.modeColors.primary[60],
    },
    '& .MuiButton-endIcon': {
      color: theme.modeColors.primary[60],
    },
  },
  '&.MuiButton-sizeSmall': {
    ...typography.titleSmall,
    borderRadius: theme.spacing(1.25),
  },
  '&.MuiButton-sizeMedium': {
    ...typography.titleMedium,
    borderRadius: theme.spacing(1.5),
  },
  '&.MuiButton-sizeLarge': {
    ...typography.titleMedium,
    borderRadius: theme.spacing(2),
  },
  '&.MuiButton-iconSizeSmall': {
    fontSize: theme.spacing(2),
    '& .material-symbols-rounded': {
      fontSize: theme.spacing(2),
    },
  },
  '& .MuiButton-iconSizeMedium,.MuiButton-iconSizeLarge': {
    fontSize: theme.spacing(3),
    '& .material-symbols-rounded': {
      fontSize: theme.spacing(3),
    },
  },
  '& .MuiButton-startIcon': {
    margin: 0,
  },
  '& .MuiButton-endIcon': {
    margin: 0,
  },
}));
export { CButton };
