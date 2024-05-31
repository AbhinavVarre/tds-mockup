import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Tabs,
  Tab,
  ThemeProvider,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Button,
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

const reportsListWithLinks = [
  {
    name: "Current balance report",
    link: "https://www.google.com",
  },
  {
    name: "Reserved Material report",
    link: "https://www.google.com",
  },
  {
    name: "Total Tonnage report",
    link: "https://www.google.com",
  },
];

const layoutsList = ["Sucker Rod Layout", "Casing Layout", "Tubing Layout"];

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
        <div style={{ paddingLeft: 20 }}>
          <ThemeProvider theme={customMuiTheme}>
            {/* {location.pathname === "/inventory" && (
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
          )} */}

            {/* {location.pathname === "/admin" && (
              <AdminTabsComponent
                selectedTab={adminSelectedTab}
                setSelectedTab={setAdminSelectedTab}
              />
            )} */}

            {location.pathname === "/inventory" && (
              <div style={{ display: "flex" }}>
                <ComboBox list={connectionsList} title="Connections" />
                <ComboBox list={layoutsList} title="Layouts" />
                <ReportComboBox list={reportsListWithLinks} title="Reports" />
              </div>
            )}
          </ThemeProvider>
          <Box
            sx={{
              width: "100%", // Adjust this to fit your design
              overflowX: "auto",
              display: "flex",
              flexWrap: "nowrap",
              paddingRight: 1,
            }}
          >
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<Navigate to="/inventory" />} />
            </Routes>
          </Box>
          <Footer>
            Copyright © 2011-{new Date().getFullYear()} Scan Systems Inc.
            <br />
            All trademarks or registered trademarks are property of their
            respective owners.
          </Footer>
        </div>
      </SideNavBarLayout>

      {/* <TopNavigationMenu /> */}
    </>
  );
}
const ComboBox = ({ list, title }: { list: string[]; title: string }) => {
  return (
    <div style={{ padding: 15 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={title} />}
      />
    </div>
  );
};

const ReportComboBox = ({
  list,
  title,
}: {
  list: { name: string; link: string }[];
  title: string;
}) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedItem(event.target.value);
    
    const selected = list.find((item) => item.name === selectedItem);
    console.log(selected);  
    
    if (selected) {
      window.open(selected.link, "_blank");
    }
  };


  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel>{title}</InputLabel>
        <Select
          value={selectedItem}
          onChange={handleChange}
          label={title}
      
        >
          {list.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

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
