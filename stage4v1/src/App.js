import React, {Component} from 'react';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';
import configureStore from './store/store'
import { Provider } from 'react-redux';
const store = configureStore({});

/*
 * Containers (Views)
 */
 import WelcomeScene from './scenes/WelcomeScene'
 import TeamSelectorScene from './scenes/TeamSelectorScene'
 import TeamProfileScene from './scenes/TeamProfileScene'

/*
 * TabBar Icons
 */
import TabIcon from './components/navigation/Tab';

const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <Scene key="root" >
          <Scene key="Welcome" initial={true} component={WelcomeScene} title='Welcome' direction="vertical"/>
          <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#eee' }}>
            <Scene key="character" title="Characters" icon={TabIcon} initial={true}>
              <Scene key="characters" component={TeamSelectorScene} title="Characters" />
            </Scene>
            <Scene key="prof" title="Profile" icon={TabIcon}>
              <Scene key="profile" component={TeamProfileScene} title="Profile" />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Provider>
  )
}

export default App
