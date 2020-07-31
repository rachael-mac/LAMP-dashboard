// Core Imports
import React from "react"
import {
  Typography,
  makeStyles,
  Box,
  Grid,
  colors,
  CardContent
} from "@material-ui/core"
import LAMP, { Participant as ParticipantObj, Activity as ActivityObj } from "lamp-core"
import Sparkline from "./Sparkline"
import RadialDonutChart from "./RadialDonutChart"
import ActivityCard from "./ActivityCard"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: "100%",
    "& tr:nth-child(even)": {
      backgroundColor: "rgba(236, 244, 255, 0.75)",
    },
    "& th": { border: 0, padding: "12px 0px 12px 20px" },
    "& td": { border: 0, padding: "12px 0px 12px 20px" },
    "& td:last-child": { paddingRight: 20 },
  },
  root2: {
    maxWidth: 345,
    margin: "16px",
    maxLength: 500,
  },
  media: {
    height: 200,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  moodContent: {
    padding: 17,

    "& h4": { fontSize: 25, color: "rgba(0, 0, 0, 0.75)", fontWeight: 600, marginBottom: 40 },
    "& h5": {
      fontSize: 18,
      color: "rgba(0, 0, 0, 0.75)",
      fontWeight: 600,
      marginBottom: 20,
      "& span": { color: "#ff8f26" },
    },
  },
  recentstoreshd: {
    padding: "0 20px",
    "& h5": { fontSize: 18, color: "rgba(0, 0, 0, 0.75)", fontWeight: 600, marginBottom: 10 },
  },
  graphcontainer: { height: "auto" },
}))

function createData(dateVal: string, timeVal: string, value: number) {
  return { dateVal, timeVal, value }
}

function _hideExperimental() {
  return (LAMP.Auth._auth.serverAddress || "").includes(".psych.digital")
}

export default function PreventData({
  participant,
  activity,
  events,
  graphType,
  earliestDate,
  enableEditMode,
  onEditAction,
  onCopyAction,
  onDeleteAction,
  ...props
}: {
  participant: ParticipantObj
  activity: any
  events: any
  graphType: number
  earliestDate: any
  enableEditMode: boolean
  onEditAction: (activity: ActivityObj, data: any) => void
  onCopyAction: (activity: ActivityObj, data: any) => void
  onDeleteAction: (activity: ActivityObj, data: any) => void
}) {
  const classes = useStyles()

  return (
    <Box>
      <Grid container>
        <CardContent className={classes.moodContent}>
          <Typography variant="h5">
            {graphType == 0 ? activity.name : activity}: <Box component="span">fluctuating</Box>
          </Typography>
          <Typography>Test desc for {graphType == 0 ? activity.name : activity}</Typography>
        </CardContent>
      </Grid>
      <Box className={classes.graphcontainer}>
        {graphType === 1 ? (
          <RadialDonutChart data={events} detailPage={true} width={300} height={300}/>
        ) : (
          graphType === 2 ? 
          <Sparkline
            minWidth={250}
            minHeight={220}
            XAxisLabel="Time"
            YAxisLabel="  "
            color={colors.blue[500]}
            data={events}
          />
          :
          <ActivityCard
            activity={activity}
            events={events}
            startDate={earliestDate}
            forceDefaultGrid={_hideExperimental()}
            onEditAction={
              activity.spec !== "lamp.survey" || !enableEditMode ? undefined : (data) => onEditAction(activity, data)
            }
            onCopyAction={
              activity.spec !== "lamp.survey" || !enableEditMode ? undefined : (data) => onCopyAction(activity, data)
            }
            onDeleteAction={
              activity.spec !== "lamp.survey" || !enableEditMode ? undefined : (data) => onDeleteAction(activity, data)
            }
          />
        )}
      </Box>      
    </Box>
  )
}
