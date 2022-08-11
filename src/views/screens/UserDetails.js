import { useEffect, useState } from 'react';

// material-ui
import { Grid, Stack } from '@mui/material';

// project imports
import UserDetailsCard from './cards/UserDetailsCard';
import ReceiptsList from './tables/receipts';
import CustomerList from './tables/customers';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const UserDetails = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <UserDetailsCard isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Stack direction="row">
                            <ReceiptsList isLoading={isLoading} />
                            <CustomerList isLoading={isLoading} />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UserDetails;
