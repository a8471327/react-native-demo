import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';

import Scene from './module/integral/scene';

const NoBackSwipe = {
  ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: {
      pop: {}
    }
};

class TestApp extends Component {
    render() {
        return (
                <Navigator
                    initialRoute={{ title: '积分商城', hasBack: 0, index: 0 }}
                    renderScene={(route, navigator) =>
                        <Scene
                            title={route.title}
                            hasBack={route.hasBack}
                            navigator={navigator}
                            route={route}
                        >
                        </Scene>
                    }
                    configureScene={ (route, routeStack) => {
                        return NoBackSwipe;
                    }}
                >
                </Navigator>
        );
    }
}


AppRegistry.registerComponent('TestApp', () => TestApp);