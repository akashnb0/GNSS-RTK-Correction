// material-ui
import { Box,useMediaQuery } from '@mui/material';

// project import
import Search from './Search';
import Notification from './Notification';


// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <Notification />
    </>
  );
};

export default HeaderContent;
