import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Grid, Card, CardContent, CardHeader, Typography, CardMedia, Divider, Alert, AlertTitle, Paper, Stack } from '@mui/material';
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { styled } from "@mui/styles";
import Chip from '@mui/material/Chip';

const StyledPaper = styled(Paper)({
    maxWidth: 250,
    minWidth: 200,
    padding: 10,
    margin: "auto"
})

const DialogWidget = ({ open, close }) => {

    return (
        <Dialog
            open={open}
            onClose={close}
            fullScreen
            sx={{ mt: 9 }}
            component={Paper}
        >
            <DialogActions>
                <Button onClick={close}>Close</Button>
            </DialogActions >

            {/* Contents should be here */}
            <Container maxWidth="md" >
                <Typography variant="h5" align="center" sx={{ mb: 2 }}>Website / Web Application Development</Typography>
                <Grid container spacing={5} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card raised sx={{ maxWidth: 390, mx: "auto" }} >
                            <CardHeader
                                avatar={<SiNextdotjs />}
                                title={<Typography>Front-end Development</Typography>}
                            />
                            <Divider />
                            <CardContent sx={{ height: 100 }}>
                                <Typography>Expert in modern single page web application using reusable and dynamic component offered by various javascrtipt frame-work.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card raised sx={{ maxWidth: 390, mx: "auto" }} >
                            <CardHeader
                                avatar={<FaNode />}
                                title={<Typography>Back-end Development</Typography>}
                            />
                            <Divider />
                            <CardContent sx={{ height: 100 }}>
                                <Typography>Expert in modern scalable back-end integration, advanced data structures and cutting edge security.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                {/* Section-2 */}
                <Box sx={{ py: 5 }}>
                    <Divider textAlign="left" sx={{ mb: 2 }}>
                        <Typography variant="h5" align="center">What can i develope</Typography>
                    </Divider>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={6} md={4} justifyItem="right">
                            <StyledPaper>
                                <Typography textAlign="center" variant="subtitle1">Static Website Development</Typography>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <StyledPaper>
                                <Typography textAlign="center" variant="subtitle1">Ecommerce Web App Development</Typography>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <StyledPaper>
                                <Typography textAlign="center" variant="subtitle1">Custom Web App Development</Typography>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </Box>
                {/* Section-3 */}
                <Box sx={{ my: 3 }}>
                    <Divider textAlign="left" sx={{ mb: 2 }}>
                        <Typography variant="h5" align="center" >Technology Skills</Typography>
                    </Divider>
                    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                        <Chip icon={<SiNextdotjs />} label="Javascript" color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />
                    </Container>
                </Box>
                {/* Section-4 */}
                <Box sx={{ textAlign: "center", my: 3 }}>
                    <Button>Back</Button>
                    <Button>Portfolio</Button>
                </Box>
            </Container>
        </Dialog >
    )
}

export default DialogWidget;