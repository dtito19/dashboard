// import React from 'react';

// const BusinessLicence = () => {
//     console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
//     return <div>BusinessLicence</div>;
// };

// export default BusinessLicence;

import * as React from 'react';
import { Box, Grid, CardMedia } from '@mui/material';
import licence from '../../assets/images/businessLicence.jpeg';

export default function BusinessLicence() {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
                <Box
                    sx={{
                        width: '100vh',
                        height: '100vh'
                    }}
                >
                    <CardMedia component="img" image={licence} alt="Business Licence" />
                </Box>
            </Grid>
        </Grid>
    );
}
