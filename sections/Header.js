import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Badge, Avatar, Switch, Toolbar, Divider, Typography, Menu, Stack, IconButton } from '@mui/material';
import Home from '@mui/icons-material/Home';
import Folder from '@mui/icons-material/Folder';
import StyleIcon from '@mui/icons-material/Style';
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import LinkWidget from "../components/LinkWidget";


function Header() {

  const HeaderData = {
    logo: "Zhine.",

    menus: [
      {
        name: "HOME",
        path: "/",
        icon: <Home />
      },
      {
        name: "RESUME",
        path: "resume",
        icon: <Folder />
      },
      {
        name: "PORTFOLIO",
        path: "portfolio",
        icon: <StyleIcon />
      }
    ],

    avatar: {
      name: "Zhine",
      img: "zhine.png",
      text: "Have a project for me?",
      mode: "DARK MODE",

      icons: [<BiPhoneCall />, <BiMailSend />]
    }
  }

  const { logo, menus, avatar } = HeaderData;
  const { name, img, text, mode, icons } = avatar

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  // Basic Menu Toggle
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>

        <Typography
          variant='h4'
          noWrap
          sx={{ mb: -1 }}
        >
          {logo}
        </Typography>

        <Stack
          direction='row'
          spacing={3}
          alignItems='center'
          sx={{ margin: 'auto' }}
        >
          {
            menus.map((menu) => {
              return (
                <React.Fragment key={menu.name}>
                  <LinkWidget name={menu.name} path={menu.path}>
                    {menu.icon}
                  </LinkWidget>
                </React.Fragment>
              )
            })
          }
        </Stack>

          <IconButton
            id='basic-button'
            ariacontrols='basic-menu'
            ariahaspopup='true'
            ariaexpanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <StyledBadge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
            >
              <Avatar alt={name} src={`/images/${img}`} />
            </StyledBadge>
          </IconButton>

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
          sx={{ top: '10px' }}
        >

          <Typography sx={{ margin: '10px', fontSize: '0.8rem' }}>
            {text}
          </Typography>
          <Stack
            direction='row'
            spacing={4}
            alignItems='center'
            justifyContent='center'
          >
            {
              icons.map((icon) => {
                return (
                  <IconButton color="primary" key={icon} onClick={handleClose} size='small'>
                    {icon}
                  </IconButton>
                )
              })
            }
          </Stack>
          <Divider />
          <Box sx={{ textAlign: 'center' }}>
            <Switch {...label} size='small' />
            <Typography variant='body2' sx={{ marginTop: '-3px' }}>
              {mode}
            </Typography>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },

  '& .MuiPaper-root': {
    backgroundColor: 'red',
  },
}));