/**
 * Created by Oakley Hall on 6/16/15.
 */

import React from 'react';
let Body = require('./components/body');
let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
React.render( <Body/>, document.body );