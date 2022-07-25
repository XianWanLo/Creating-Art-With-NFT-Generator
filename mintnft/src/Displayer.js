import {useLocation} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { load } from "dotenv/types";




const Displayer = () => {

    const location = useLocation();
    const theme = createTheme();
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });


    return (
<ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={4} >
          <ButtonBase>
            <Img alt="complex" src={location.state.NFTurl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <CurrencyBitcoinIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              NFT Information:
            </Typography>
            <Box component="form">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem button>
                    <ListItemText primary="The Name of the NFT" secondary={location.state.NFTname} />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="The Description of the NFT" secondary={location.state.NFTdescription} />
                </ListItem>
            </List>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => window.open('http://afternoon-env.eba-q4ub6hff.us-east-1.elasticbeanstalk.com/', '_blank')}
              >
                Click me back to Ai art generator!~
              </Button>

              <Grid container>
                <Grid item xs>
                  <a href={location.state.txURL} variant="body2">
                    See the transaction infomation at here.
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
      );



    //   <img src={location.state.NFTurl} classname="image" alt=""/>
    //   <h2>The Name of the NFT:{location.state.NFTname} </h2>
    //   <h2>The Description of the NFT: {location.state.NFTdescription}</h2>
    //   <button onClick={() => window.open('http://afternoon-env.eba-q4ub6hff.us-east-1.elasticbeanstalk.com/', '_blank')} >Click me back to Ai art generator!~</button>
    
    
    // <div className="Minter">
    // <br></br>
    // <h1 id="title"> Fresh Minted NFT! </h1>
    // <form>
    //     <h2>NFT</h2>
    //     <img src="https://tomcam.github.io/least-github-pages/assets/logo.png" classname="image" alt=""/>
    //     <h2>The Name of the NFT:My First NFT~ </h2>
    //     <h2>The Description of the NFT: This is a Picture</h2>
    //     <button onClick={() => window.open('http://afternoon-env.eba-q4ub6hff.us-east-1.elasticbeanstalk.com/', '_blank')} >Click me back to Ai art generator!~</button>
    // </form>
    // </div>

    // sx={{
    //     backgroundRepeat: 'no-repeat',
    //     backgroundColor: (t) =>
    //       t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
      
};

export default Displayer;
