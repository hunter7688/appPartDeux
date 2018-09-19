import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';

import Character from './Character';

/**
 * TODO Step 3:
 *
 * 1. Destructure character, onSelect, onSkip from this.props inside the render
 *    component method.
 * 2. Add Character component inside of View with characterContainer styles
 * 3. Define characterThumbnail prop on Character component and pass character.uri from props to it
 * 4. Add first Button component with onPress action handler. This will be the onSkip button.
 *    Pass the onSkip(character.id) inside of an arrow function to the onPress action handler
 *    i.e. onPress={() => onSkip(character.id)}
 * 5. Add styles to onSkip button
 * 6. Add second Button component with onPress action handler. This will be the onSelect button.
 *    Pass the onSelect(character.id) inside of an arrow function to the onPress action handler
 *    i.e. onPress={() => onSelect(character.id)}
 * 7. Add styles to onSelect button
 */

class SelectionCarousel extends Component{

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.characterContainer}>
          {/* 2. Add Character inside this View*/}
        </View>
        <View style={styles.buttonContainer}>
          {/* 3. & 4. Add first and second Button components inside this View*/}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  characterContainer:{
    flex: 8,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  skipButton: {
    borderColor: 'grey',
    borderWidth: 1,
    color: 'grey',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 60,
    fontSize: 17,
    letterSpacing: 3
  },
  selectButton: {
    backgroundColor: 'green',
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: 60,
    fontSize: 17,
    letterSpacing: 3
  }
})

SelectionCarousel.propTypes = {
  character: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired
}

export default SelectionCarousel;
