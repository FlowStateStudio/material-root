/**
 * Created by Oakley Hall on 6/16/15.
 */
import React from 'react';
import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let MenuItem = mui.MenuItem;
let LeftNav = mui.LeftNav;

export default React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState(){
    return {

    }
  },
  _iconTouchHandler() {

  },
  _menuItems() {
    return [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
        type: MenuItem.Types.LINK,
        payload: 'https://github.com/callemall/material-ui',
        text: 'GitHub'
      },
      {
        text: 'Disabled',
        disabled: true
      },
      {
        type: MenuItem.Types.LINK,
        payload: 'https://www.google.com',
        text: 'Disabled Link',
        disabled: true
      }
    ];
  },
  render() {
    return <div>
            <AppBar title='Title'
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this._iconTouchHandler}/>
            <LeftNav menuItems={this._menuItems()} />
          </div>;
  }
});
