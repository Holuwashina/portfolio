import * as React from "react";
import { createTheme } from "@mui/material/styles";

// Create Context
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log("clicked");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#6a1b9a",
            light: "#9c4dcc",
            dark: "#38006b",
          },
          secondary: {
            main: "#1a237e",
            light: "#534bae",
            dark: "#000051",
          },
        },
        typography: {
          fontFamily: ["squada one", "Segoe UI", "Roboto"].join(","),
          body2: {
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          },
          h4: {
            fontFamily: ["Alex brush", "cursive", "Segoe UI", "Roboto"].join(
              ","
            ),
          },
          button: {
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
          },
        },
      }),
    [mode]
  );

  return {
    colorMode,
    theme,
  };
}

export { ColorModeContext };
