import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  const [adminSelectedTab, setAdminSelectedTab] = useState(0);
  const [settingsLayoutSelectedTab, setSettingsLayoutSelectedTab] = useState(0);
  const location = useLocation();


  return (
    <>
      <SideNavBarLayout title={appInfo.title}>
        <ThemeProvider theme={customMuiTheme}>
          {location.pathname === "/inventory" && (
            <>
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
            </>
          )}

          {location.pathname === "/admin" && (
            <AdminTabsComponent
              selectedTab={adminSelectedTab}
              setSelectedTab={setAdminSelectedTab}
            />
          )}

          {location.pathname === "/settings" && (
            <SettingsLayoutTabsComponent
              selectedTab={settingsLayoutSelectedTab}
              setSelectedTab={setSettingsLayoutSelectedTab}
            />
          )}
        </ThemeProvider>

        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/inventory" />} />
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
  return (
    <UniversalTabsComponent
      selectedTab={mainSelectedTab}
      setSelectedTab={setMainSelectedTab}
      list={["Connections", "Layouts"]}
    />
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

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>
      <UniversalTabsComponent
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        list={connectionsList}
      />
    </div>
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

  return (
    <UniversalTabsComponent
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      list={layoutsList}
    />
  );
};

const AdminTabsComponent = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}) => {
  const adminList = [
    "Manage Connections",
    "Register Users",
    "Change Passwords",
  ];

  return (
    <UniversalTabsComponent
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      list={adminList}
    />
  );
};

const SettingsLayoutTabsComponent = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}) => {
  const layoutsList = ["Layout"];

  return (
    <UniversalTabsComponent
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      list={layoutsList}
    />
  );
};

const UniversalTabsComponent = ({
  selectedTab,
  setSelectedTab,
  list,
}: {
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
  list: string[];
}) => {
  const handleTabChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setSelectedTab(newValue);
  };
  return (
    <div style={{ paddingLeft: "10px" }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="simple tabs example"
      >
        {list.map((label, index) => (
          <Tab
            key={index}
            label={label}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          />
        ))}
      </Tabs>
    </div>
  );
};
