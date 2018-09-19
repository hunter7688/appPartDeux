import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import CharacterList from '../components/CharacterList';

/**
 * TODO Step 4:
 *
 * 1. Delete state object of characters
 * 2. Add mapStateToProps, mapDispatchToProps and connect export
 * 3. Delete old export
 * 4. Destructure team from this.props
 * 5. Pass team.characters to the CharacterList component
 */

class TeamProfileContainer extends Component{

  constructor(props) {
    super(props);

    this.state = {
      characters: {
        1: {id: 1, name: 'Hulk', thumbnail: 'https://media.giphy.com/media/XSc4Kkc5u2WZy/giphy.gif?response_id=5924e51c9c00278bccae6381'},
        2: {id: 2, name: 'Spiderman', thumbnail: 'https://media.giphy.com/media/wxM2SPuC0xONy/giphy.gif?response_id=5924e4fbdce001eee5377580'},
        3: {id: 3, name: 'Wolverine', thumbnail: 'https://media.giphy.com/media/12m3hgKuSuhClW/giphy.gif?response_id=5924e4caa6a5ded54cf455f4'}
      }
    };

  }

  render(){

    return(
      <View style={styles.container}>
        <CharacterList  />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
})

export default TeamProfileContainer
