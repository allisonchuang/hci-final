import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green800 } from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import '../style.scss';

const styles = {
  menuIcon: {
    color: '#FFFFFF',
  },
  specs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  menu: {
    marginLeft: 20,
    width: 300,
    backgroundColor: '#f1f2f3',
  },
  dropDown: {
    padding: 0,
  },
  menuItem: {
    margin: 0,
  },
  selected: {
    color: green800,
  },
  label: {
    textAlign: 'center',
  },
  capacity: {
    marginLeft: 70,
  },
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { location: 1, capacity: 1 };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.specs}>
          <div>Location: </div>
          <DropDownMenu
            value={this.state.location}
            labelStyle={styles.label}
            onChange={(event, index, value) => { this.setState({ location: value }); }}
            style={styles.menu}
            iconStyle={styles.menuIcon}
            menuItemStyle={styles.menuItem}
            menuStyle={styles.dropDown}
            selectedMenuItemStyle={styles.selected}
            autoWidth={false}
          >
            <MenuItem primaryText="Baker Berry Library" value={1} />
            <MenuItem primaryText="Feldberg Library" value={2} />
            <MenuItem primaryText="Mathews-Fuller Library" value={3} />
          </DropDownMenu>
          <div style={styles.capacity}>Capacity: </div>
          <DropDownMenu
            value={this.state.capacity}
            labelStyle={styles.label}
            onChange={(event, index, value) => { this.setState({ capacity: value }); }}
            style={styles.menu}
            iconStyle={styles.menuIcon}
            menuItemStyle={styles.menuItem}
            menuStyle={styles.dropDown}
            selectedMenuItemStyle={styles.selected}
            autoWidth={false}
          >
            <MenuItem primaryText="For any number of people" value={1} />
            <MenuItem primaryText="1 – 4 people" value={2} />
            <MenuItem primaryText="5 – 8 people" value={3} />
            <MenuItem primaryText="9 – 12 people" value={4} />
            <MenuItem primaryText="13+ people" value={5} />
          </DropDownMenu>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
