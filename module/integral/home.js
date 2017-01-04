import React, {
    Component,
    PropTypes
} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import Swipe from '../../plugin/swipe'
import Gift from './gift'

// 屏幕宽度
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfo: {
        height: 120,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#C1CBD2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userInfoBtn: {
        backgroundColor: '#fff',
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    swipe: {
        marginTop: 10,
        height: 120
    },
    action: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionBtn: {
        width: deviceWidth / 2 - 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C1CBD2'
    },
    change: {
        marginTop: 20,
        backgroundColor: '#fff'
    },
    changeLabel: {
        paddingVertical: 10,
        paddingLeft: 10
    },
    changeGift: {
        height: 360,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})


export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    _gotoScene(str, hasBack = 1){
        this.props.navigator.push({
            title: str,
            hasBack: hasBack,
            index: this.props.route.index + 1
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.userInfo}>
                        <Image
                            source={{uri: 'http://pic.baiyangwang.com/portrait/2016/12/21/585a6a669612b.jpg'}}
                            style={{width: 80, height: 80, borderRadius: 40}} />
                        <View style={{flex: 3, paddingLeft: 10, height: 80}}>
                            <Text style={{color: '#fff'}}>当前积分</Text>
                            <Text style={{color: '#fff', fontSize: 30, marginTop: 20}}>9482</Text>
                        </View>
                        <View style={{flex: 2, height: 80, justifyContent: 'space-between'}}>
                            <TouchableOpacity style={styles.userInfoBtn} onPress={() => this._gotoScene('积分明细')}>
                                <Text>积分明细</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.userInfoBtn} onPress={() => this._gotoScene('兑换记录')}>
                                <Text>兑换记录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.swipe}>
                        <Swipe />
                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity style={styles.actionBtn} onPress={() => this._gotoScene('每日签到')}>
                            <Text>签到赚积分</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn} onPress={() => {}}>
                            <Text>购物返积分</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.change}>
                        <Text style={styles.changeLabel}>超值兑换</Text>
                        <View style={styles.changeGift}>
                            <Gift even={false} action={(page) => this._gotoScene(page)}/>
                            <Gift even={true} action={(page) => this._gotoScene(page)}/>
                            <Gift even={false} action={(page) => this._gotoScene(page)}/>
                            <Gift even={true} action={(page) => this._gotoScene(page)}/>
                        </View>
                    </View>
                    <View style={styles.change}>
                        <Text style={styles.changeLabel}>积分兑好礼</Text>
                        <View style={styles.changeGift}>
                            <Gift even={false} action={(page) => this._gotoScene(page)}/>
                            <Gift even={true} action={(page) => this._gotoScene(page)}/>
                            <Gift even={false} action={(page) => this._gotoScene(page)}/>
                            <Gift even={true} action={(page) => this._gotoScene(page)}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}