import React, { useState } from "react"
import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  CardContent,
  Button,
  Grid,
  Box,
  Icon,
  Fab,
  Container,
  AppBar,
  Toolbar,
} from "@material-ui/core"
import { ReactComponent as SadHappy } from "../icons/SadHappy.svg"
import { ReactComponent as ThumbsUp } from "../icons/ThumbsUp.svg"
import { ReactComponent as ThumbsDown } from "../icons/ThumbsDown.svg"
import classnames from "classnames"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topicon: {
      minWidth: 180,
      minHeight: 180,
      [theme.breakpoints.down("xs")]: {
        minWidth: 180,
        minHeight: 180,
      },
    },
    header: {
      background: "#FFF9E5",
      padding: 20,
      [theme.breakpoints.up("sm")]: {
        textAlign: "center",
      },

      "& h2": {
        fontSize: 25,
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.75)",
      },
    },
    tipscontentarea: {
      padding: "40px 20px 20px",
      "& h3": {
        fontWeight: "bold",
        fontSize: "16px",
        marginBottom: "15px",
      },
      "& p": {
        fontSize: "16px",
        lineheight: "24px",

        color: "rgba(0, 0, 0, 0.75)",
      },
    },
    lineyellow: {
      background: "#FFD645",
      height: "3px",
    },
    linegreen: {
      background: "#65CEBF",
      height: "3px",
    },
    linered: {
      background: "#FF775B",
      height: "3px",
    },
    lineblue: {
      background: "#86B6FF",
      height: "3px",
    },
    likebtn: {
      fontStyle: "italic",
      padding: 6,
      margin: "0 5px",
      "&:hover": { background: "#FFD645" },
      "& label": {
        position: "absolute",
        bottom: -18,
        fontSize: 12,
      },
    },
    active: {
      background: "#FFD645",
    },
    btnyellow: {
      background: "#FFD645",
      borderRadius: "40px",
      minWidth: "200px",
      boxShadow: "0px 10px 15px rgba(255, 214, 69, 0.25)",
      lineHeight: "38px",
      marginTop: "15%",
      cursor: "pointer",
      textTransform: "capitalize",
      fontSize: "16px",
      color: "rgba(0, 0, 0, 0.75)",
      "&:hover": { background: "#cea000" },
    },
    backbtn: {
      position: "absolute",
      left: 10,
    },
    howFeel: { fontSize: 14, color: "rgba(0, 0, 0, 0.5)", fontStyle: "italic", textAlign: "center", marginBottom: 10 },
    colorLine: { maxWidth: 115 },
    tipStyle: {
      background: "#FFF9E5",
      borderRadius: "10px",
      padding: "20px 20px 20px 20px",
      textAlign: "justify",
      margin: "20px auto 0px",
      "& h6": { fontSize: 16, fontWeight: 600, color: "rgba(0, 0, 0, 0.75)" },
    },
    toolbardashboard: {
      minHeight: 65,
      padding: "0 10px",
      "& h5": {
        color: "rgba(0, 0, 0, 0.75)",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        width: "calc(100% - 96px)",
      },
    },
    headerIcon: { textAlign: "center" },
  })
)

export default function TipNotification({ ...props }) {
  const classes = useStyles()
  const [status, setStatus] = useState("Yes")

  const handleClickStatus = (statusVal: string) => {
    setStatus(statusVal)
  }

  return (
    <Container>
      <Box className={classes.header}>
        <Box width={1} className={classes.headerIcon}>
          {props.icon}
        </Box>
        <Typography variant="caption">Tip</Typography>
        <Typography variant="h2">{props.title}</Typography>
      </Box>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item lg={4} sm={10} xs={12}>
          <CardContent className={classes.tipscontentarea}>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.details}
            </Typography>
            <Box mt={4} mb={2}>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid container className={classes.colorLine} spacing={0} xs={4} md={4} lg={4}>
                  <Grid item xs={3} className={classes.lineyellow}></Grid>
                  <Grid item xs={3} className={classes.linegreen}></Grid>
                  <Grid item xs={3} className={classes.linered}></Grid>
                  <Grid item xs={3} className={classes.lineblue}></Grid>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.howFeel}>Was this helpful today?</Box>
            <Box textAlign="center">
              <IconButton
                onClick={() => handleClickStatus("Yes")}
                className={status === "Yes" ? classnames(classes.likebtn, classes.active) : classes.likebtn}
              >
                <ThumbsUp />
                <label>Yes</label>
              </IconButton>
              <IconButton
                onClick={() => handleClickStatus("No")}
                className={status === "No" ? classnames(classes.likebtn, classes.active) : classes.likebtn}
              >
                <ThumbsDown />
                <label>No</label>
              </IconButton>
            </Box>
            <Box textAlign="center">
              <Fab variant="extended" color="primary" className={classes.btnyellow} onClick={props.onComplete}>
                Mark complete
              </Fab>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  )
}
