import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { white, green500, green800, black } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import '../style.scss';
import Counter from '../containers/counter';
import Controls from '../containers/controls';
import Bookings from '../containers/bookings';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


injectTapEventPlugin();

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <Counter />
      <Controls />
    </div>
  );
};

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
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false, value: 1 };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
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
                    rightIcon={<ContentAdd />}
                  />
                  <ListItem
                    hoverColor={white}
                    style={styles.listItem}
                    primaryText="Baker 258K"
                    rightIcon={<ContentAdd />}
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
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route exact path="/test/:id" component={Test} />
              <Route component={FallBack} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
