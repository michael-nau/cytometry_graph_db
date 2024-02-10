import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          // Apply your theme's background color
          backgroundColor: "#FFFFFF", // Replace '#yourFillColor' with your desired color
        },
      },
    },
    // If you specifically want to target the dropdown
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#FFFFFF", // Replace with your color for the dropdown
          "&:focus": {
            backgroundColor: "#yourSelectFillColor", // Maintain the color even when focused
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
