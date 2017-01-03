import React, {
    Component,
    PropTypes
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Calendar from './calendar'

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
        height: 200,
        backgroundColor: '#C1CBD2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    integral: {
        position: 'absolute',
        left: 0,
        top: 10,
        height: 34,
        width: 90,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 17,
        borderBottomRightRadius: 17,
    },
    valText: {
        color: '#778E9F'
    },
    action: {
        position: 'absolute',
        left: 0,
        top: 60,
        paddingHorizontal: 10
    },
    actionText: {
        color: '#fff'
    },
    btn: {
        width: 104,
        height: 104,
        borderRadius: 52,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStatus: {
        width: 80,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#9FADB9',
        color: '#9B8E9F',
        fontSize: 18,
        textAlign: 'center'
    },
    btnTime: {
        marginTop: 5,
        color: '#9B8E9F',
    },
    desc: {
        marginTop: 14,
        color: '#fff'
    },
    calendar: {
        padding: 10
    },
    rule: {
        paddingHorizontal: 10
    },
    ruleLabel: {
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ruleLabelText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#889BBC'
    },
    ruleDesc: {
        color: '#889BBC'
    }
});

export default class Rule extends Component{
    constructor(props) {
        super(props);
    }

    _gotoHome(){
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.integral}>
                        <Image source={require('../../images/money.png')} />
                        <Text style={styles.valText}>9483</Text>
                    </View>
                    <TouchableOpacity style={styles.action} onPress={() => this._gotoHome()}>
                        <Text style={styles.actionText}>前往积分商城&#10148;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnStatus}>签到</Text>
                        <Text style={styles.btnTime}>连续4天</Text>
                    </TouchableOpacity>
                    <Text style={styles.desc}>今日签到可领1积分，再签3天可额外获得10积分</Text>
                </View>
                <View style={styles.calendar}>
                    <Calendar />
                </View>
                <View style={styles.rule}>
                    <View style={styles.ruleLabel}>
                        <Image source={require('../../images/note.png')} />
                        <Text style={styles.ruleLabelText}>签到规则</Text>
                    </View>
                    <View>
                        <Text style={styles.ruleDesc}>1、每个用户每天可签到1次，每次可领5积分</Text>
                        <Text style={styles.ruleDesc}>2、连续签到7、15、28天可额外获得10、15、20积分</Text>
                        <Text style={styles.ruleDesc}>3、若某天漏签，连续签到天数将清零重新计算</Text>
                    </View>
                </View>
            </View>
        );
    }
}