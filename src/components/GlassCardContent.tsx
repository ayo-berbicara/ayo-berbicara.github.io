import {default as CardContent, CardContentProps} from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const GlassCardContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
    background: 'transparant',
    color: 'white'
}));

export default GlassCardContent;
