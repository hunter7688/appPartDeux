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

    
  }

  render(){

    let { team } = this.props;

    return(
      <View style={styles.container}>
        <CharacterList characters={team.characters} />
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

function mapStateToProps(state){
  return{
    team: state.team
  }
}
function mapDispatchToProps(dispatch){
  return{
    action: bindActionCreators(ActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamProfileContainer)
