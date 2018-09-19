import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';

import WelcomeForm from '../components/WelcomeForm';

/**
 * TODO Step 4:
 *
 * 1. Add mapDispatchToProps and connect export
 * 2. Delete old export
 * 3. Add setTeamName action from redux Actions inside the handleSubmit component method.
 *    i.e. this.props.Actions.setTeamName(teamName)
 */

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

    //Navigate to tabbar key
    RouteActions.tabbar();

  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default WelcomeContainer;
