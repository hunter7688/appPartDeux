import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CharacterList from '../components/CharacterList';

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
        <CharacterList characters={this.state.characters} />
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

export default TeamProfileContainer;
