// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// import logo from '../../assets/images/google.svg';
// import { Box, Button } from '@mui/material';

// const Img = styled('img')({
//     margin: 0,
//     display: 'block',
//     maxWidth: '50%',
//     maxHeight: '50%'
// });

// export default function UserDetails() {
//     return (
//         <Paper
//             sx={{
//                 p: 2,
//                 margin: 'auto',
//                 maxWidth: '100%',
//                 maxHeight: 500,
//                 flexGrow: 1,
//                 backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')
//             }}
//         >
//             <Grid container spacing={6}>
//                 <Grid item>
//                     <ButtonBase sx={{ width: 120, height: 120 }}>
//                         <Img alt="complex" src={logo} />
//                     </ButtonBase>
//                     <Typography gutterBottom variant="subtitle1" component="div">
//                         Full Name: Jane Doe
//                     </Typography>
//                     <Typography variant="subtitle1" gutterBottom>
//                         Phone Number: 0712345678
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={8} sm container>
//                     <Grid item xs={6} container direction="row" spacing={2}>
//                         <Grid item xs>
//                             <Typography gutterBottom variant="subtitle1" component="div">
//                                 Account Documents
//                             </Typography>
//                             <Box sx={{ flexDirection: 'row' }}>
//                                 <Typography variant="body2" gutterBottom component="div">
//                                     Tax Clearence:
//                                 </Typography>
//                                 <Button variant="contained" color="primary" gutterBottom>
//                                     View
//                                 </Button>
//                             </Box>
//                             <Box sx={{ flexDirection: 'row' }}>
//                                 <Typography variant="body2" gutterBottom component="div">
//                                     Business License:
//                                 </Typography>
//                                 <Button variant="contained" color="primary" gutterBottom>
//                                     View
//                                 </Button>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                     <Grid item xs={6} container direction="column" spacing={2}>
//                         <Grid item xs>
//                             <Typography gutterBottom variant="subtitle1" component="div">
//                                 Standard license
//                             </Typography>
//                             <Typography variant="body2" gutterBottom>
//                                 Full resolution 1920x1080 • JPEG
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 ID: 1030114
//                             </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                                 Remove
//                             </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                                 Remove
//                             </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                                 Remove
//                             </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                                 Remove
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Paper>
//     );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { Grid, Stack, Button, Box, Switch, FormControlLabel, FormGroup } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

export default function UserDetails() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
                <Box
                    sx={{
                        width: 800,
                        height: '60vh',

                        backgroundColor: 'white'
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="Status" />
                            </FormGroup>
                        }
                        title="Kipanga Kakamega"
                        // subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Phone Number: 0712345678
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Business Location: Bahi, Dodoma
                        </Typography>

                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Tin Number: 12345667
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            National ID: 1997098755443398765
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Total Transactions: Tsh 1000000
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Stack spacing={2} direction="row">
                            <Button LinkComponent={Link} to={'licence'} variant="contained">
                                Business Licence
                            </Button>
                            <Button LinkComponent={Link} to={'clearence'} variant="contained">
                                Tax Clearence
                            </Button>
                        </Stack>
                    </CardActions>
                </Box>
            </Grid>
        </Grid>
    );
}
