import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';

import WelcomeForm from '../components/WelcomeForm';

class WelcomeContainer extends Component{
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <View style={styles.container}>
        <WelcomeForm onSubmit={this.handleSubmit} />
      </View>
    )
  }

  handleSubmit(teamName) {

    this.props.Actions.setTeamName(teamName)
    //Navigate to tabbar key
    RouteActions.tabbar();

  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(WelcomeContainer);
