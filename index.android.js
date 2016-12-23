import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator} from 'react-native';
import CodePush from 'react-native-code-push';

import MyScene from './module/MyScene';

class TestApp extends Component {
    componentWillMount() {
        //访问慢,不稳定
        CodePush.checkForUpdate('y1xAOHGdxanPlJ_Ph_yBHhSf-1TSEyEVBaHEM').then((update)=>{
            if(update){
                CodePush.sync({
                    deploymentKey: 'deployment-key-here',
                    updateDialog: {
                        optionalIgnoreButtonLabel: '稍后',
                        optionalInstallButtonLabel: '后台更新',
                        optionalUpdateMessage: '有新版本了，是否更新？',
                        title: '更新提示'
                    },
                    installMode: CodePush.InstallMode.IMMEDIATE
                });
            }
        });
    }
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
                    <MyScene
                        title={route.title}
                        onForward={() => {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex
                            });
                        }}
                        onBack={() => {
                            if(route.index > 0){
                                navigator.pop();
                            }
                        }}
                    >
                    </MyScene>
                }
                configureScene={ (route, routeStack) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump
                }}
            >
            </Navigator>
        );
    }
}


AppRegistry.registerComponent('TestApp', () => TestApp);