import { Button, Theme, styled } from '@mui/material';
import typography from '../../styles/customTheme/typography';
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
      return theme.colors.primary[30];
    case 'outlined':
    case 'text':
      return theme.colors.white;
    default:
      return theme.colors.primary[30];
  }
};

const CButton = styled(Button)<Record<string, any>>(({ theme, size, variant }) => ({
  borderRadius: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: getPaddingBySize(theme, size),
  '&.MuiButton-contained': {
    backgroundColor: theme.colors.primary[100],
    color: theme.colors.white,
    '&:hover': {
      backgroundColor: theme.colors.primary[80],
      boxShadow: theme.elevations.lightDepth01,
    },
    '&:active': {
      backgroundColor: theme.colors.primary[90],
    },
  },
  '&.MuiButton-outlined': {
    backgroundColor: theme.colors.primary[10],
    color: theme.colors.black,
    border: `1px solid ${theme.colors.primary[60]}`,
    '&:hover': {
      backgroundColor: theme.colors.primary[20],
      boxShadow: theme.elevations.lightDepth01,
    },
    '&:active': {
      backgroundColor: theme.colors.primary[30],
    },
  },
  '&.MuiButton-text': {
    backgroundColor: theme.colors.primary[10],
    border: 'none',
    '&:hover': {
      backgroundColor: theme.colors.primary[20],
    },
    '&:active': {
      backgroundColor: theme.colors.primary[30],
    },
  },
  '&.Mui-disabled': {
    borderColor: variant === 'outlined' ? `${theme.colors.primary[30]} !important` : 'none',
    color: theme.colors.primary[60],
    backgroundColor: getDisabledColor(theme, variant),
    '& .MuiButton-startIcon': {
      color: theme.colors.primary[60],
    },
    '& .MuiButton-endIcon': {
      color: theme.colors.primary[60],
    },
  },
  '&.MuiButton-sizeSmall': {
    ...typography.labelSmall,
    borderRadius: theme.spacing(1.25),
  },
  '&.MuiButton-sizeMedium': {
    ...typography.labelMedium,
    borderRadius: theme.spacing(1.5),
  },
  '&.MuiButton-sizeLarge': {
    ...typography.labelLarge,
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
