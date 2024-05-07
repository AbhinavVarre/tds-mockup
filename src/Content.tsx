import { Routes, Route, Navigate } from "react-router-dom";
import { Tabs, Tab, ThemeProvider } from "@mui/material"; // Import Tabs and Tab from MUI
import appInfo from "./app-info";
import routes from "./app-routes";
import { SideNavInnerToolbar as SideNavBarLayout } from "./layouts";
import { navigation } from "./app-navigation";
import TopNavigationMenu from "./components/top-navigation-menu/TopNavigationMenu";
import { Footer } from "./components";
import { useState } from "react";
import { customMuiTheme } from "./components/top-navigation-menu/TopNavigationMenu";

export default function Content() {
  console.log(routes);

  const [mainSelectedTab, setMainSelectedTab] = useState(0);
  const [connectionsSelectedTab, setConnectionsSelectedTab] = useState(0);
  const [layoutsSelectedTab, setLayoutsSelectedTab] = useState(0);

  return (
    <>
      <SideNavBarLayout title={appInfo.title}>
        <ThemeProvider theme={customMuiTheme}>
          <MainTabsComponent
            mainSelectedTab={mainSelectedTab}
            setMainSelectedTab={setMainSelectedTab}
          />
          {mainSelectedTab === 0 ? (
            <ConnectionsTabsComponent
              selectedTab={connectionsSelectedTab}
              setSelectedTab={setConnectionsSelectedTab}
            />
          ) : (
            <LayoutTabsComponent
              selectedTab={layoutsSelectedTab}
              setSelectedTab={setLayoutsSelectedTab}
            />
          )}
        </ThemeProvider>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer>
          Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
          <br />
          All trademarks or registered trademarks are property of their
          respective owners.
        </Footer>
      </SideNavBarLayout>

      {/* <TopNavigationMenu /> */}
    </>
  );
}

const MainTabsComponent = ({
  mainSelectedTab,
  setMainSelectedTab,
}: {
  mainSelectedTab: number;
  setMainSelectedTab: (tabIndex: number) => void;
}) => {
  const handleTabChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setMainSelectedTab(newValue);
  };
  return (
    <Tabs
      value={mainSelectedTab}
      onChange={handleTabChange}
      aria-label="simple tabs example"
    >
      <Tab label="Connections" />
      <Tab label="Layouts" />
      <Tab label="Tab 3" />
    </Tabs>
  );
};

const ConnectionsTabsComponent = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}) => {
  const connectionsList = [
    "All",
    "Dale Meyer - EOG Resources",
    "MCIP_Allied Pipe",
    "TRC_Cononco",
  ];

  const handleTabChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setSelectedTab(newValue);
  };
  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      aria-label="simple tabs example"
    >
      {connectionsList.map((label, index) => (
        <Tab key={index} label={label} />
      ))}
    </Tabs>
  );
};

const LayoutTabsComponent = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}) => {
  const layoutsList = ["Sucker Rod Layout", "Casing Layout", "Tubing Layout"];

  const handleTabChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setSelectedTab(newValue);
  };
  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      aria-label="simple tabs example"
    >
      {layoutsList.map((label, index) => (
        <Tab key={index} label={label} />
      ))}
    </Tabs>
  );
};
