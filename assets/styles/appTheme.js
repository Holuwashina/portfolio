import { createTheme } from "@mui/material/styles"
import "@fontsource/alex-brush"
// import "@fontsource/roboto"
import "@fontsource/leckerli-one"
import "@fontsource/assistant"

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#004d40",
            light: "#39796b",
            dark: "#00251a"
        },
        secondary: {
            main: "#6a1b9a",
            light: "#9c4dcc",
            dark: "#38006b"
        }
    }
})


theme = createTheme(theme, {
    typography: {
        h6: {
            fontFamily: "assistant",
            fontWeight: 400,
            fontSize: "1.1rem"
        },
        h5: {
            fontFamily: "leckerli One",
            fontSize: "1.1rem"
        },
        h4: {
            fontFamily: "Alex brush",
            // fontWeight: 200
        },
        body1: {
            fontFamily: "assistant",
            fontWeight: 400,
        },
        body2: {
            fontFamily: "assistant",
            fontWeight: 400,
            fontSize: "0.65rem",
            letterSpacing: "0.07em",
        },
        button: {
            fontFamily: "assistant",
        },
        subtitle1: {
            fontFamily: "assistant",
            fontWeight: 400,
            fontSize: "0.7rem",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
        },
        subtitle2: {
            fontFamily: "assistant",
            fontWeight: 400,
            fontSize: "0.8rem",
        },
        caption: {
            fontFamily: "assistant",
            fontWeight: 400,
            fontSize: "0.6rem",
        },
    },


    //Overrides Components
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    // backgroundColor: "#fff",
                    // color: theme.palette.primary.main
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    fontSize: "0.7rem",
                    letterSpacing: "0.07em",
                    // color: theme.palette.primary.main
                },
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: "center"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    // color: theme.palette.primary.main
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "0.6rem",
                    letterSpacing: "0.07em",
                    fontWeight: 400,
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // color: theme.palette.primary.main
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    // color: theme.palette.primary.main
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontFamily: "assistant",
                    fontWeight: 400,
                    fontSize: "0.6rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                // h6: {
                //     color: theme.palette.primary.light
                // },
                // h5: {
                //     color: theme.palette.primary.main
                // },
                // h4: {
                //     color: theme.palette.primary.main
                // },
                // body1: {
                //     color: theme.palette.primary.light
                // },
                // body2: {
                //     color: theme.palette.primary.main
                // },
                // subtitle1: {
                //     color: theme.palette.primary.main
                // },
                // subtitle2: {
                //     color: theme.palette.primary.light
                // }
            }
        }
    },
})

export default theme;