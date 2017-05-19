import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { white, green500, green800, black } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import '../style.scss';
import Bookings from '../containers/bookings2';

injectTapEventPlugin();

const styles = {
  navbar: {
    backgroundColor: green800,
  },
  userbar: {
    backgroundColor: green800,
  },
  userHeader: {
    fontSize: 20,
    paddingTop: 20,
    marginBottom: 12,
    color: white,
  },
  subheader: {
    color: green500,
  },
  subheader2: {
    color: green500,
    marginTop: -10,
  },
  customWidth: {
    width: 210,
    color: black,
  },
  selectedItem: {
    color: green500,
  },
  listItem: {
    marginTop: -10,
  },
  list: {
    marginTop: -15,
  },
  addButton: {
    marginTop: -12,
    marginLeft: -12,
  },
};

class NavBarMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false, value: 1 };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // handle when the menu button on appbar is pressed
  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  // close the drawer when mouse is clicked outside
  handleClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            iconElementLeft={<IconButton onTouchTap={this.handleToggle}><NavigationMenu /></IconButton>}
            title="Dartmouth Library Booking Site"
            iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
            style={styles.navbar}
          />
          <Drawer
            docked={false}
            open={this.state.drawerOpen}
            onRequestChange={open => this.setState({ drawerOpen: open })}
          >
            <List style={styles.userbar}>
              <ListItem
                primaryText="Xing-Dong Yang"
                style={styles.userHeader}
                disabled
                leftAvatar={<Avatar size={40}>XD</Avatar>}
              />
            </List>
            <List>
              <Subheader style={styles.subheader}>Upcoming Bookings</Subheader>
              <Bookings />
              <Subheader style={styles.subheader}>My Favorite Rooms</Subheader>
              <List style={styles.list}>
                <ListItem
                  hoverColor={white}
                  style={styles.listItem}
                  primaryText="Berry 171A"
                  rightIcon={<IconButton iconStyle={styles.addButton}><ContentAdd /></IconButton>}
                />
                <ListItem
                  hoverColor={white}
                  style={styles.listItem}
                  primaryText="Baker 258K"
                  rightIcon={<IconButton iconStyle={styles.addButton}><ContentAdd /></IconButton>}
                />
              </List>
              <Subheader style={styles.subheader2}>Quick Settings</Subheader>
              <List style={styles.list}>
                <ListItem
                  style={styles.listItem}
                  primaryText="Email notifications"
                  rightToggle={<Toggle />}
                />
                <ListItem
                  style={styles.listItem}
                  primaryText="Text notifications"
                  rightToggle={<Toggle />}
                />
              </List>
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NavBarMenu;
