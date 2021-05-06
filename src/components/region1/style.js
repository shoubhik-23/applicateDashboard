import { makeStyles } from "@material-ui/core";

export const style = makeStyles((theme) => ({
  main: {
    padding: "75px 2px 20px",
    backgroundColor: "#F8F8F8",
    overflowX: "hidden",
    minHeight: "calc(100vh - 40px)",
    maxWidth: 1166,
  },
  w100: {
    width: "100%",
  },
  canvas: {
    height: "50px",
    width: "100%",
  },
  chart: {
    padding: "4px 10px 18px",
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "#35332B",
  },
  root: {
    display: "block",
    margin: "5px auto",
    maxWidth: 420,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    color: "#0A0A0A",
    opacity: 0.6,
    fontSize: "10px",
    textAlign: "left",
    marginBottom: "15px",
  },
  item: {
    "&:nth-child(1)": {
      color: "#35332B",
      borderRight: "1pt solid rgba(53, 51, 43, 0.1)",
    },
    "&:nth-child(2)": {
      color: "#419945",
      borderRight: "1pt solid rgba(53, 51, 43, 0.1)",
    },
    "&:nth-child(3)": {
      color: "#E87716",
    },
  },
  title: {
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "20px",
    margin: "2px 5px",
  },
  number: {
    padding: 0,
    margin: 0,
    display: "block",
    fontSize: "14px",
    fontWeight: "bold",
  },
  name: {
    fontSize: "10px",
    lineHeight: 1,
  },
  yearButton: {
    color: "#2958C1",
    fontSize: 12,
    fontWeight: 400,
  },
  filterPhone: {
    "& div": {
      fontSize: 10,
    },
  },
  sortButton: {
    color: "#2958C1",
    fontSize: 12,
    fontWeight: 400,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 500,
  },
  cardSubTitle: {
    fontSize: 10,
    opacity: 0.7,
    marginTop: 5,
  },

  button1: {
    color: "#35332C",
    fontSize: 10,
    border: "1.5px solid black",
    borderRadius: "20px",
    padding: "3px 6px",
    margin: "15px 8px 0 0",
  },
  status: {
    fontSize: 10,
    fontWeight: 500,
    color: "white",
    padding: "2px 4px",
    borderRadius: 20,
    width: 45,
  },
  open: {
    backgroundColor: "#E87716",
  },
  accepted: {
    backgroundColor: "#419168",
  },
  proposalDetailsHead: {
    opacity: "0.65",

    fontSize: 10,
    fontWeight: 900,
    marginTop: "8px",
  },
  proposalDetails: {
    opacity: "0.65",
    fontWeight: "500",
    fontSize: 10,
    marginLeft: 5,
  },
  dueStatus: {
    backgroundColor: "#E87716",
    padding: "2px 10px",
    borderRadius: "4px",
    color: "white",
    fontSize: 10,
  },
  paidStatus: {
    backgroundColor: "#3F8E66",
    padding: "2px 10px",
    borderRadius: "4px",
    color: "white",
    fontSize: 10,
  },
  proposalName: {
    fontSize: 12,
    fontWeight: 500,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "45px",
    // padding: "30px 25px 95px",
    // backgroundColor: "#F3F3F3",
    marginTop: 30,
  },
  secureText: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 10,
  },
  powered: {
    fontSize: 12,
    fontWeight: 500,
    opacity: 0.7,
    paddingRight: 15,
  },
  finalText: {
    fontSize: 11,
    opacity: 0.5,
    fontStyle: "italic",
    marginTop: 10,
  },
  tileGrid: {
    padding: "30px 25px",
  },
  tiles: {
    padding: "18px 16px",
    borderRadius: 10,
  },
  tilesImage: {
    height: 32,
    width: 32,
  },
  tileTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: "#FFFFFF",
    marginTop: 15,
  },
  tileText: {
    fontSize: 10,
    color: "#FFFFFF",
    opacity: 0.7,
  },
  colorTile: {
    height: "80px",
    borderRadius: "10px",
    padding: "8px 0 0 1%",
    boxSizing: "border-box",
    margin: "0px 0px 20px",
  },
  clndrCheckbox: {
    fontSize: "12px",
  },
  checkText: {
    fontSize: "12px",
    marginLeft: "10px",
  },
  arrow: {
    color: "white",
    fontWeight: "900",
    paddingTop: "10px",
  },
  colorTileText: {
    fontSize: "12px",
    color: "white",
    padding: "12px 2% 0 0 ",
    cursor: "pointer",
  },
  tileIconBox: {
    padding: "5% 2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tileIcon: {
    height: "30px",
    width: "70%",
  },
  searchField: {
    "& input": {
      fontSize: 12,
    },
    "& label": {
      fontSize: 12,
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    color: "#35332B",
    textAlign: "center",
    fontSize: 16,
  },
  appBarSpacer: theme.mixins.toolbar,
  header: {
    backgroundColor: "#419168",
    padding: "10px 20px",
  },
  headerTitle: {
    padding: "10px 0px",
    color: "#ffffff",
    fontSize: 24,
  },
  headerSubTitle: {
    padding: "0px 0px",
    color: "#FFFFFF",
    opacity: 0.6,
    fontSize: 16,
  },
  headerLink: {
    padding: "0px 0px",
    color: "#F8DA9E",
    fontSize: 12,
  },
  headerButton: {
    margin: "20px 0px",
    color: "#FFFFFF",
    backgroundColor: "#35332B",
    fontSize: 12,
    "&:active": {
      backgroundColor: "#35332B",
    },
    "&:hover": {
      backgroundColor: "#35332B",
    },
  },
  field: {
    padding: "20px 20px",
  },
  divider: {
    padding: "0px 20px",
  },
  label: {
    color: "#35332B",
    opacity: 0.6,
    fontSize: 12,
  },
  value: {
    color: "#35332B",
    fontWeight: "bolder",
    fontSize: 12,
  },
  bankDetails: {
    padding: "20px 0",
    borderRadius: 4,
    backgroundColor: "#F8F5E8",
  },
  bankItem: {
    fontSize: 12,
    color: "#35332B",
    fontWeight: 500,
  },
  radioLabel: {
    fontSize: 14,
    color: "#35332B",
    "& span": {
      fontSize: 14,
      fontWeight: 500,
    },
  },
  inputSubTitle: {
    margin: "20px 0px",
  },
  white: {
    color: "#ffffff",
  },
}));
