import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Switch, Avatar, Typography, FormGroup, FormControlLabel, Button } from '@mui/material';
import { red } from '@mui/material/colors';
// third-party

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| User Details ||============================== //

const UserDetailsCard = ({ isLoading }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const grey500 = theme.palette.grey[500];

    useEffect(() => {}, [, isLoading, grey500]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={5}>
                            <Grid xs={6} container alignItems="flex-start" justifyContent="flex-start">
                                <Grid item>
                                    <Grid item>
                                        <Typography variant="h2" gutterBottom>
                                            User Details
                                        </Typography>
                                        <Avatar sx={{ bgcolor: red[500], marginBottom: 2 }} aria-label="recipe" gutterBottom>
                                            R
                                        </Avatar>
                                        <Typography variant="h5" gutterBottom>
                                            Full Name: Kipanga Kakakuona
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Phone Number: 0712104228
                                        </Typography>
                                        <Typography variant="h5">Registered Date: </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Grid xs={6} container alignItems="flex-start" justifyContent="flex-start">
                                <Grid>
                                    <Grid item>
                                        <Grid container direction="column" spacing={0}>
                                            <Typography variant="h2" gutterBottom>
                                                Business Detail
                                            </Typography>

                                            <Typography variant="h5" gutterBottom>
                                                Business Name:
                                            </Typography>

                                            <Typography variant="h5" gutterBottom>
                                                Tin Number:
                                            </Typography>

                                            <Typography variant="h5" gutterBottom>
                                                Location:
                                            </Typography>
                                            <Grid sx={{ marginBottom: 2 }} gutterBottom>
                                                <Stack spacing={6} direction="row" gutterBottom>
                                                    <Typography variant="h5" gutterBottom>
                                                        Business Licence:
                                                    </Typography>
                                                    <Button LinkComponent={Link} to={'licence'} variant="contained" gutterBottom>
                                                        Preview
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                            <Grid sx={{ marginBottom: 2 }}>
                                                <Stack spacing={6} direction="row" gutterBottom>
                                                    <Typography variant="h5" gutterBottom>
                                                        Tax Clearence:
                                                    </Typography>
                                                    <Button LinkComponent={Link} to={'clearence'} variant="contained">
                                                        Preview
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <Grid xs={7} container alignItems="center" justifyContent="flex-start">
                                <Grid>
                                    <Grid item>
                                        <Grid container direction="column" spacing={1}>
                                            <FormGroup>
                                                <FormControlLabel control={<Switch defaultChecked />} label="Status" />
                                            </FormGroup>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

UserDetailsCard.propTypes = {
    isLoading: PropTypes.bool
};

export default UserDetailsCard;
