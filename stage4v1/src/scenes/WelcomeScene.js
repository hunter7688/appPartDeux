import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from 'react-native-button';
//Actions is provided by the router for dynamic routing
import { Actions as RouteActions} from 'react-native-router-flux';
import WelcomeContainer from '../containers/WelcomeContainer';

 class WelcomeScene extends Component{

  render(){
    return(
      <Image style = { styles.image } source={require('../assets/marvel_background.jpg')}>
        <View style={styles.container}>
          <WelcomeContainer />
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'rgba(48,51,58, 0.8)',
  },
 image: {
   flex: 1,
   width: null,
   height: null,
   alignItems: 'center',
   justifyContent: 'center',
  },
})



export default WelcomeScene;
