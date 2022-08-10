import * as React from 'react';
import { Box, Grid, CardMedia } from '@mui/material';
import clearence from '../../assets/images/taxClearence.jpeg';

export default function TaxClearence() {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: '100%' }}>
            <Grid item xs={3}>
                <Box
                    sx={{
                        width: '100vh',
                        height: '100%'
                    }}
                >
                    <CardMedia component="img" height={'70%'} image={clearence} alt="Tax Clearence" />
                </Box>
            </Grid>
        </Grid>
    );
}
