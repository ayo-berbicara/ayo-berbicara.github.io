import { default as Card, CardProps } from '@mui/material/Card';
import { alpha, styled } from '@mui/material/styles';

const GlassCard = styled(Card)<CardProps>(({ theme }) => ({
    background: `${alpha('#ffffff', 0.2)}`,
    backdropFilter: 'blur(8px)'
}));

export default GlassCard;
