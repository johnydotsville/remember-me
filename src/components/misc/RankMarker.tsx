import { Box } from '@mui/material';
import type { TaskRank } from '@/src/types/model/TaskRank';


export function RankMarker({ rank, lastSolved, size = 24 }: { rank: TaskRank, lastSolved: number, size?: number}) {
  const COLORS = {
    UNKNOWN: '#C0C0C0',
    BELOW_NORMAL: '#00FF21',   // Чистый зелёный
    NORMAL: '#2BA6FF',         // Чистый голубой
    ABOVE_NORMAL: '#FF934C',   // Чистый оранжевый
    EXTREME: '#D32F2F',        // Чистый красный
  };

  const getColor = () => {
    switch (rank.code) {
      case 'unknown':
        return COLORS.UNKNOWN;
      case 'below2':
      case 'below1':
        return COLORS.BELOW_NORMAL;
      case 'normal':
        return COLORS.NORMAL;
      case 'above1':
      case 'above2':
        return COLORS.ABOVE_NORMAL;
      case 'cantsolve':
        return COLORS.EXTREME;
      default:
        return '#9E9E9E';
    }
  };

  const isSquare = rank.code === 'cantsolve';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        backgroundColor: lastSolved && getColor(),
        borderRadius: isSquare ? '2px' : '50%',
        color: 'white',
        fontSize: size * 0.6,
        lineHeight: 1,
        marginRight: 1,
        border: lastSolved === 0 ? `3px solid ${getColor()}` : 'none',
      }}
    >
      {/* { !(['normal', 'cantsolve'].includes(rank.code)) && rank.id} */}
    </Box>
  );
};