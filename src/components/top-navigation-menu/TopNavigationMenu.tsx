import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import appRoutes from "../../app-routes";
import "./TopNavigationMenu.scss";
import UserPanel from "../user-panel/UserPanel";
import SubDrawer from "./SubDrawer";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const customMuiTheme = createTheme({
  palette: {
    primary: {
      main: '#800000', // Define your custom color here
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#800000', // Set text color for selected tab
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#800000', // Set color for the tab indicator
        }
      }
    }
  }
});

interface LinkTabProps {
  label: string;
  href: string;
  indicator?: boolean;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  let navigate = useNavigate(); // Get the navigate function from useNavigate hook

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        navigate(props.href); // Navigate programmatically to the href
      }}
      {...props}
      label={
        <span
          style={props.selected ? { color: "#800000" } : { color: "black" }}
        >
          {props.label}
        </span>
      }
    />
  );
}

export default function TopNavigationMenu() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [subDrawerOpen, setSubDrawerOpen] = React.useState(false);

  return (
    <ThemeProvider theme={customMuiTheme}>
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Box sx={{ padding: 1, fontSize: 50, fontFamily: "monospace", fontWeight:'bold', color:'#800000' }}>
          TDS Web App Demo
        </Box>
        <Box sx={{ alignContent: "center" }}>
          <UserPanel menuMode={"context"} />
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          {appRoutes.map(({ path, element, title }) => (
            <LinkTab label={title} href={path} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: "flex" }}>
        {subDrawerOpen ? (
          <Box sx={{maxWidth:'10vw'}}>
            <SubDrawer />
          </Box>
        ) : (
          <></>
        )}
          <Button onClick={() => setSubDrawerOpen((prev) => !prev)}>
            {subDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Button>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
