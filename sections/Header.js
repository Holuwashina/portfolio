import * as React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Badge,
  Avatar,
  Toolbar,
  Divider,
  Typography,
  Menu,
  Stack,
  IconButton,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Folder from "@mui/icons-material/Folder";
import StyleIcon from "@mui/icons-material/Style";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../assets/styles/appTheme";

function Header() {
  const HeaderData = {
    logo: "Zhine.",

    menus: [
      {
        name: "Home",
        path: "/",
        icon: <Home />,
      },
      {
        name: "Resume",
        path: "resume",
        icon: <Folder />,
      },
      {
        name: "Projects",
        path: "portfolio",
        icon: <StyleIcon />,
      },
    ],

    avatar: {
      name: "Zhine",
      img: "zhine.png",
      text: "Have a project for me?",

      icons: [
        {
          icon: <BiPhoneCall />,
          link: "tel:+2348062820377",
        },
        {
          icon: <BiMailSend />,
          link: "mailto:hamzatholuwashina@gmail.com?subject=Hire",
        },
      ],
    },
  };

  const { logo, menus, avatar } = HeaderData;
  const { name, img, text, icons } = avatar;

  const label = { inputProps: { "aria-label": "Switch demo" } };

  // Basic Menu Toggle
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" noWrap sx={{ mb: -2 }}>
          {logo}
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{ margin: "auto" }}
        >
          {menus.map((menu, index) => {
            return (
              <React.Fragment key={index}>
                <LinkWidget name={menu.name} path={menu.path}>
                  {menu.icon}
                </LinkWidget>
              </React.Fragment>
            );
          })}
        </Stack>

        <IconButton
          id="basic-button"
          ariacontrols="basic-menu"
          ariahaspopup="true"
          ariaexpanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={name} src={`/images/${img}`} />
          </StyledBadge>
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
          sx={{ top: "10px" }}
        >
          <Typography sx={{ margin: "10px" }}>{text}</Typography>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {icons.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <IconButton
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    color="primary"
                  >
                    {data.icon}
                  </IconButton>
                </React.Fragment>
              );
            })}
          </Stack>
          <Divider />
          <Box sx={{ textAlign: "center" }}>
            {theme.palette.mode} mode
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

const LinkWidget = ({ children, name, path }) => {
  return (
    <>
      <Link href={path}>
        <Box sx={{ textAlign: "center", cursor: "pointer" }}>
          <IconButton color="inherit" size="small">
            {children}
          </IconButton>
          <Typography variant="body2" sx={{ marginTop: "-4px" }}>
            {name}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },

  "& .MuiPaper-root": {
    backgroundColor: "red",
  },
}));
