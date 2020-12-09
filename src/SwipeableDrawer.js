import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Drawer, Button, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { FaBars } from 'react-icons/fa';
import './Index.scss';

const useStyles = makeStyles({
  list: {
    width: 1000,
  },
  fullList: {
    width: "auto"
  }
});

const StyledDrawer = withStyles({
  root: {
    width: 1000,
  }
})(SwipeableDrawer);

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={'right'}>
        <FaBars className="blue" onClick={toggleDrawer('right', true)} />
        <StyledDrawer
          variant={'root'}
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          <List>
            {['bio', 'projects', 'resumé'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </StyledDrawer>
      </React.Fragment>
    </div>
  );
}
