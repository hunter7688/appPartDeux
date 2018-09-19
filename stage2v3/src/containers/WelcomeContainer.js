import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';

import WelcomeForm from '../components/WelcomeForm';

/**
 * TODO Step 3:
 *
 * 1. Create WelcomeContainer component
 * 2. Setup component class constructor
 * 3. Add WelcomeForm component to WelcomeContainer render method.
 * 4. Add onSubmit event handler to WelcomeForm and pass handleSubmit
 *    component method to it
 * 5. Add handleSubmit component method with dynamic routing using RouteActions.tabbar()
 * 6. Bind the handleSubmit component method inside of the constuctor,
 *    i.e this.handleSubmit = this.handleSubmit.bind(this)
 * 7. Export WelcomeContainer component at the bottom of page
 */

class WelcomeContainer extends Component{
  render(){
    return(

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
