import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface InputProps {
  imgUrl?: string;
  direction?: string;
}

const ImageBox = styled(Box, { shouldForwardProp: (props) => props !== 'imgUrl' })<InputProps>(({ theme, imgUrl }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  backgroundImage: imgUrl,
}));
const Flex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const FormContainer = styled(Box)<InputProps>(({ theme }) => ({
  ...Flex,
  flexDirection: 'column',
}));

const FlexBox = styled(Box)<InputProps>(({ theme }) => ({
  ...Flex,
}));
export { ImageBox, FormContainer, FlexBox };
