import * as React from 'react';
import { createTheme } from "@mui/material/styles"
import "@fontsource/alex-brush"
import "@fontsource/roboto"
import "@fontsource/squada-one"
import "@fontsource/leckerli-one"
import "@fontsource/assistant"



// Create Context
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                console.log("clicked")
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#1a237e",
                        light: "#534bae",
                        dark: "#000051"
                    },
                    secondary: {
                        main: "#6a1b9a",
                        light: "#9c4dcc",
                        dark: "#38006b"
                    }
                },
                typography: {
                    fontFamily: ["squada one", "Segoe UI", "Roboto"].join(","),
                    body2: {
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase"
                    },
                    h4: {
                        fontFamily: ["Alex brush", "Segoe UI", "Roboto"].join(","),
                    },
                    button: {
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                    },

                },
                components: {

                }
            }),
        [mode],
    );

    return {
        colorMode,
        theme
    }
}


// 00aaf4
// let theme = createTheme({
//     palette: {
//         mode: "light",
//         primary: {
//             main: "#1a237e",
//             light: "#534bae",
//             dark: "#000051"
//         },
//         secondary: {
//             main: "#6a1b9a",
//             light: "#9c4dcc",
//             dark: "#38006b"
//         }
//     }
// })


// theme = createTheme(theme, {
//     typography: {
//         h5: {
//             fontFamily: ["leckerli One","Segoe UI", "Roboto"].join(","),
//             fontSize: "1rem",
//             textTransform: "uppercase",
//         },
//         h4: {
//             fontFamily: ["Alex brush","Segoe UI", "Roboto"].join(","),
//         },
//         body1: {
//             fontFamily: ["squada one","Segoe UI", "Roboto"].join(","),
//         },
//         body2: {
//             fontFamily: ["squada one","Segoe UI", "Roboto"].join(","),
//             fontSize: "0.7rem",
//             letterSpacing: "0.08em",
//         },
//         button: {
//             fontFamily: ["squada one","Segoe UI", "Roboto"].join(","),
//         },
//         subtitle1: {
//             fontFamily: ["squada one","Segoe UI", "Roboto"].join(","),
//             fontSize: "0.8rem",
//             letterSpacing: "0.07em",
//             textTransform: "uppercase",
//         },
//         subtitle2: {
//             fontFamily: ["squada one","Segoe UI", "Roboto"].join(","),
//             fontSize: "0.9rem",
//         },
//         caption: {
//             fontFamily: ["squada one","Segoe UI", "Roboto"].join(","),
//             fontSize: "0.8rem",
//         },
//     },


//     //Overrides Components
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                     // backgroundColor: "#fff",
//                     // color: theme.palette.primary.main
//                 }
//             }
//         },
//         MuiTab: {
//             styleOverrides: {
//                 root: {
//                     fontSize: "0.65rem",
//                     minWidth: 0,
//                     maxWidth: 300
//                     // color: theme.palette.primary.main
//                 },
//             }
//         },
//         MuiTabs: {
//             styleOverrides: {
//                 flexContainer: {
//                     justifyContent: "center"
//                 }
//             }
//         },
//         MuiCardContent: {
//             styleOverrides: {
//                 root: {
//                     // color: theme.palette.primary.main
//                 }
//             }
//         },
//         MuiButton: {
//             styleOverrides: {
//                 root: {
//                     fontSize: "0.6rem",
//                     letterSpacing: "0.07em",
//                     fontWeight: 400,
//                 }
//             }
//         },
//         MuiIconButton: {
//             styleOverrides: {
//                 root: {
//                     // color: theme.palette.primary.main
//                 }
//             }
//         },
//         MuiListItemIcon: {
//             styleOverrides: {
//                 root: {
//                     // color: theme.palette.primary.main
//                 }
//             }
//         },
//         MuiChip: {
//             styleOverrides: {
//                 root: {
//                     fontFamily: "squada one",
//                     fontSize: "0.6rem",
//                     letterSpacing: "0.07em",
//                     textTransform: "uppercase",
//                 }
//             }
//         },
//         MuiAlert: {
//             styleOverrides: {
//                 root: {
//                     textTransform: "uppercase"
//                 }
//             }
//         },
//         MuiTypography: {
//             styleOverrides: {
//                 // h6: {
//                 //     color: theme.palette.primary.light
//                 // },
//                 // h5: {
//                 //     color: theme.palette.primary.main
//                 // },
//                 // h4: {
//                 //     color: theme.palette.primary.main
//                 // },
//                 // body1: {
//                 //     color: theme.palette.primary.light
//                 // },
//                 // body2: {
//                 //     color: theme.palette.primary.main
//                 // },
//                 // subtitle1: {
//                 //     color: theme.palette.primary.main
//                 // },
//                 // subtitle2: {
//                 //     color: theme.palette.primary.light
//                 // }
//             }
//         }
//     },
// })

export { ColorModeContext };