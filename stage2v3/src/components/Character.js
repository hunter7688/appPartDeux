import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

/**
 * TODO Step 3:
 * 1. Add Image component to display the character's image
 * 2. Add Text component to display the character's name
 * 3. Add styles to the Image and Text component
 * 4. Export Character component at bottom of page
 */
class Character extends Component{

  render(){

    let { characterThumbnail, name } = this.props;

    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({

})

Character.propTypes = {
  characterThumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
