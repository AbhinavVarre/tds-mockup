import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Tabs,
  Tab,
  ThemeProvider,
  Autocomplete,
  TextField,
} from "@mui/material"; // Import Tabs and Tab from MUI
import appInfo from "./app-info";
import routes from "./app-routes";
import { SideNavInnerToolbar as SideNavBarLayout } from "./layouts";
import { navigation } from "./app-navigation";
import TopNavigationMenu from "./components/top-navigation-menu/TopNavigationMenu";
import { Footer } from "./components";
import { useState } from "react";
import { customMuiTheme } from "./components/top-navigation-menu/TopNavigationMenu";

const connectionsList = [
  "All",
  "Dale Meyer - EOG Resources",
  "MCIP_Allied Pipe",
  "TRC_Cononco",
  "TRC_Chevron",
  "TRC_Marathon",
  "TRC_Oxy",
  "TRC_Pioneer",
  "TRC_Samson",
  "TRC_Shell",
  "TRC_Southwestern",
  "TRC_XTO",
  "TRC_XTO Energy",
  "MCIP_Allied Partners",
  "MCIP_Apache",
  "MCIP_BHP",
  "MCIP_Cimarex",
];

const layoutsList = ["Sucker Rod Layout", "Casing Layout", "Tubing Layout"];

export default function TopNavContent() {
  console.log(routes);

  return (
    <>
      <TopNavigationMenu />
 
    </>
  );
}
