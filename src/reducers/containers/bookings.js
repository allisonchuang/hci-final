import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { green500 } from 'material-ui/styles/colors';

injectTapEventPlugin();

const styles = {
  selectedItem: {
    color: green500,
  },
};

class Bookings extends Component {
  constructor(props) {
    super(props);

    this.state = { drawerOpen: false, value: 1 };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <MuiThemeProvider>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
          selectedMenuItemStyle={styles.selectedItem}
        >
          <MenuItem style={styles.menuItem} value={1} primaryText="Custom width" />
          <MenuItem style={styles.menuItem} value={2} primaryText="Every Night" />
          <MenuItem style={styles.menuItem} value={3} primaryText="Weeknights" />
          <MenuItem style={styles.menuItem} value={4} primaryText="Weekends" />
          <MenuItem style={styles.menuItem} value={5} primaryText="Weekly" />
        </DropDownMenu>
      </MuiThemeProvider>
    );
  }
}

export default Bookings;
