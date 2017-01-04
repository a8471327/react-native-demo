import React, {
    Component,
    PropTypes
} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Header from './header'
import Home from './home'
import MyIntegral from './myIntegral'
import Record from './record'
import Rule from './rule'
import Sign from './sign'
import GiftDetail from './gift-detail'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    content: {
        flex: 1
    }
})


export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props)
        let {title, hasBack, ...other} = this.props;
        this.state = {
            sceneComponent: {
                '积分商城': <Home {...other}/>,
                '兑换记录': <Record {...other}/>,
                '积分明细': <MyIntegral {...other}/>,
                '积分规则': <Rule {...other}/>,
                '每日签到': <Sign {...other}/>,
                '礼品详情': <GiftDetail {...other}/>
            }
        }
    }

    onActionSelected(){

    }

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props}/>
                <View style={styles.content}>
                {
                    this.state.sceneComponent[this.props.title]
                }
                </View>
            </View>
        );
    }
}