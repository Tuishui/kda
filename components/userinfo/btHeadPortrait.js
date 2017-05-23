import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

const styles = {
  button: {
    width:170,
    height:170
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    opacity: 0,
  },
};


class RaisedButtonExampleComplex extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
      <RaisedButton
      label="修改我的个人头像"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      >
      <input type="file" style={styles.exampleImageInput} />
      </RaisedButton>
      </MuiThemeProvider>
    )
  }
}



ReactDOM.render(
  <RaisedButtonExampleComplex />,
  document.getElementById('btHeadPortrait')
);