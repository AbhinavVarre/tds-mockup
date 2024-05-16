import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import appRoutes from "../../app-routes";
import "./TopNavigationMenu.scss";
import UserPanel from "../user-panel/UserPanel";
import SubDrawer from "./SubDrawer";
import { Button, Icon } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReorderIcon from "@mui/icons-material/Reorder";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import scansyslogo from "../../assets/scansyslogo.png";
import { useLocation } from "react-router-dom"; // Import useLocation
import Footer from "../footer/Footer";

export const customMuiTheme = createTheme({
  palette: {
    primary: {
      main: "#800000", // Define your custom color here
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#800000", // Set text color for selected tab
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#800000", // Set color for the tab indicator
        },
      },
    },
  },
});

interface LinkTabProps {
  label: string;
  href: string;
  indicator?: boolean;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  let navigate = useNavigate(); // Get the navigate function from useNavigate hook
  const iconprops = {
    margin: 1,
    alignContent: "center",
    color: props.selected ? "#800000" : "black",
  };

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        navigate(props.href); // Navigate programmatically to the href
      }}
      {...props}
      label={
        <div
          style={{
            display: "flex",
          }}
        >
          {props.label === "Settings" && <SettingsIcon sx={iconprops} />}
          {props.label === "Inventory" && <ReorderIcon sx={iconprops} />}
          {props.label === "Admin" && <AdminPanelSettingsIcon sx={iconprops} />}

          <div
            style={{
              color: props.selected ? "#800000" : "black",
              margin: "auto",
            }}
          >
            {props.label}
          </div>
        </div>
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
  const location = useLocation(); // Get the current location

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
          <Box sx={{ padding: 1 }}>
            <img src={scansyslogo} alt="scansyslogo" style={{ maxHeight: 50 }} />
          </Box>
          <Box sx={{ alignContent: "center" }}>
            <UserPanel menuMode={"context"} />
          </Box>
        </Box>

        <Box sx={{ border: 1, borderColor: "divider" }}>
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
        <Box sx={{ display: "flex", backgroundColor: "white" }}>
          {location.pathname === "/inventory" && subDrawerOpen && (
            <Box>
              <SubDrawer />
            </Box>
          )}
          {location.pathname === "/inventory" && (
            <Box sx={{ border: 1, borderColor: "divider", display: "flex" }}>
              <Button onClick={() => setSubDrawerOpen((prev) => !prev)}>
                {subDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </Button>
            </Box>
          )}
          <Box sx={{}}>
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </Box>
        </Box>
        <Box sx={{ paddingLeft: 3 }}>
          <Footer>
            Copyright © 2011-{new Date().getFullYear()} Scan Systems Inc.
            <br />
            All trademarks or registered trademarks are property of their
            respective owners.
          </Footer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
