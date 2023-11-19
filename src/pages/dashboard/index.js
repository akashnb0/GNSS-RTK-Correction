import { useState } from 'react';

// material-ui
import {
 
  Grid,
  
  Typography
} from '@mui/material';

import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Statistics</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Positioning Mode" count="Kinematics" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Solution Status" count="-" />
      </Grid>

      <Grid item xs={12}  sx={{ mb: -2.25 }} >
        <Typography variant="h5">Position</Typography>
      </Grid>

      <Grid item xs={8} >
        <AnalyticEcommerce title="Latitude" count="0°"   extra="± 0.000 m" />
        <AnalyticEcommerce title="Longitude" count="0°"  extra="± 0.000 m" />
        <AnalyticEcommerce title="Height" count="0 m" extra="± 0.000 m" />
      </Grid>

      {/* <Grid item xs={8}  sx={{ mb: -2.25 }}>
        <Typography variant="h5">Velocity</Typography>
      </Grid> */}

      <Grid item xs={6} sm={6} md={4} lg={3}>
      <h3>Velocity</h3>
        <AnalyticEcommerce title="East" count="0 m/s"   />
        <AnalyticEcommerce title="North" count="0 m/s"  />
        <AnalyticEcommerce title="Up" count="0 m/s"  />
      </Grid>

      {/* <Grid item xs={8} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Base Position</Typography>
      </Grid> */}

      <Grid item xs={8}>
      <h3>Base Position</h3>
        <AnalyticEcommerce title="Latitude" count="0°"   />
        <AnalyticEcommerce title="Longitude" count="0°"  />
        <AnalyticEcommerce title="Height" count="0 m"  />
      </Grid>
      
     
      {/* <Grid item xs={0} sx={{ mb: -2.25 }}>
        <Typography variant="h5">RTK Parameters</Typography>
      </Grid> */}

      <Grid item xs={6} sm={6} md={4} lg={3}>
        <h3>RTK Parameters</h3>
        <AnalyticEcommerce count="0.0s"  extra="Age of differential"  />
        <AnalyticEcommerce count="0.o" extra="AR validation ratio" />
        <AnalyticEcommerce count="0.00 m" extra="Baseline" />
      </Grid>
 
      {/* row 4 */}
      <Grid item xs={12} >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Signal-to-noise Ratio</Typography>
          </Grid>
          
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <SalesColumnChart />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
