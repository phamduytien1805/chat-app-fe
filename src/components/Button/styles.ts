import { Button, Theme, styled } from '@mui/material';
import typography from '../../styles/customTheme/typography';
const getColorByMode = (mode: string) => {};
const getElevationByMode = (mode: string) => {};
const getHoverStyles = (theme: Theme, variant?: string) => {
  switch (variant) {
    case 'contained':
      return {
        background: 'rgba(255, 255, 255, 0.08)',
        opacity: '0.08px',
        boxShadow: theme.elevations.lightDepth01,
      };
    case 'outlined':
      return {
        backgroundColor: theme.colors.primary[40],
        opacity: '0.08',
      };
    case 'text':
      return {
        backgroundColor: theme.colors.primary[40],
        opacity: '0.08',
      };
    default:
      break;
  }
};

const getFocusStyles = (variant: string, theme: Theme) => {
  switch (variant) {
    case 'contained':
      return {
        backgroundColor: theme.colors.primary[40],
        opacity: '0.12',
      };
    case 'outlined':
      return {
        border: `1px solid ${theme.colors.primary[40]}`,
        backgroundColor: theme.colors.primary[40],
        opacity: '0.12',
      };
    case 'text':
      return {
        backgroundColor: theme.colors.primary[40],
        opacity: '0.08',
      };
    default:
      break;
  }
};

const CButton = styled(Button)<Record<string, any>>(({ theme, variant }) => ({
  ...typography.labelLarge,
  color: theme.colors.white,
  borderRadius: theme.spacing(12.5),
  padding: theme.spacing(1.25, 3),
  '&:hover': {
    ...getHoverStyles(theme, variant),
  },
  '& .MuiButton-contained': {
    backgroundColor: theme.colors.primary[40],
  },
  '& .MuiButton-outlined': {
    backgroundColor: theme.colors.primary[40],
  },
}));
export { CButton };
