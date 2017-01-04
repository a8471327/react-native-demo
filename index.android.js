import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, BackAndroid, Platform } from 'react-native';

import Scene from './module/integral/scene';

const NoBackSwipe = {
  ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: {
      pop: {}
    }
};

class TestApp extends Component {
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const nav = this.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
          nav.pop();
          return true;
        }
        return false;
    };

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
                    ref={(ref) => {
                        this.navigator = ref;
                    }}
                    configureScene={ (route, routeStack) => {
                        return NoBackSwipe;
                    }}
                >
                </Navigator>
        );
    }
}


AppRegistry.registerComponent('TestApp', () => TestApp);