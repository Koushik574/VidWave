import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;

// import React, { useEffect, useRef, useContext } from "react";
// import { Grid, Typography, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// import { SocketContext } from "../SocketContext.js";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

// const VideoPlayer = () => {
//   const context = useContext(SocketContext);
//   const classes = useStyles();
//   const userVideoRef = useRef();
//   const ownVideoRef = useRef();

//   useEffect(() => {
//     // Request permission for accessing camera and microphone
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         if (userVideoRef.current) {
//           userVideoRef.current.srcObject = stream;
//         }
//       })
//       .catch((err) => {
//         console.error("Error accessing media devices:", err);
//       });
//   }, []);

//   return (
//     <Grid container className={classes.gridContainer}>
//       {/* {Our Own Video} */}
//       <Paper className={classes.paper}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" gutterBottom>
//             Your Video
//           </Typography>
//           <video
//             playsInline
//             muted
//             ref={ownVideoRef}
//             autoPlay
//             className={classes.video}
//           />
//         </Grid>
//       </Paper>

//       {/* {User's Video} */}
//       <Paper className={classes.paper}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" gutterBottom>
//             Other User's Video
//           </Typography>
//           <video
//             playsInline
//             ref={userVideoRef}
//             autoPlay
//             className={classes.video}
//           />
//         </Grid>
//       </Paper>
//     </Grid>
//   );
// };

// export default VideoPlayer;


