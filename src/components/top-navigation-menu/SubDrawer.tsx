import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MenuItem } from "@mui/material";

const connectionsList = [
  "All",
  "Dale Meyer - EOG Resources",
  "MCIP_Allied Pipe",
  "TRC_Cononco",
  "TRC_Chevron",
  "TRC_Marathon",
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

export default function SubDrawer() {
  return (
    <div style={{ maxHeight: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          maxHeight: "100%", // Set the maximum height to 100% of the parent
          overflowY: "auto", // Add scroll on y-axis if content overflows
          color: "#800000",
        }}
      >
        <Accordion sx={{ color: "#800000" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontSize: 20, fontWeight: "bold" }}
          >
            Connections
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {connectionsList.map((connection) => (
                <Button
                  key={connection} // Add a unique key for each item
                  sx={{
                    width: "100%",
                    fontSize: 15,
                    textAlign: "left",
                    textTransform: "none", // Ensure text is not uppercase
                    fontWeight: "normal", // Ensure text is not bold
                    color: "black",
                    justifyContent: "flex-start", // Ensure text is aligned to the left
                  }}
                >
                  {connection}
                </Button>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#800000" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ fontSize: 20, fontWeight: "bold" }}
          >
            Reports
          </AccordionSummary>
          <AccordionDetails>
            {reportsListWithLinks.map((item, index) => (
              <MenuItem key={index} value={item.link}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "#800000" }}
                >
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </AccordionDetails>
        </Accordion>
        {/* <Accordion defaultExpanded sx={{ color: "#800000" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{ fontSize: 20, fontWeight: "bold" }}
          >
            Reconciliation Reports
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> 
        </Accordion> */}
      </Box>
    </div>
  );
}
