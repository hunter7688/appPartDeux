import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TeamProfileContainer from '../containers/TeamProfileContainer'

class TeamProfileScene extends Component{

  render() {
    return(
      <View style={styles.container}>
        <TeamProfileContainer />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  }
})

export default TeamProfileScene;
