import React, {
    Component,
    PropTypes
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginBottom: 10,
        padding: 10,
        height: 160,
        backgroundColor: '#C1CBD2',
        justifyContent: 'space-between'
    },
    rule: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    ruleText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    interfral: {
        paddingBottom: 10,
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 30,
        borderRadius: 4,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
    },
    item: {
        paddingHorizontal: 15,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    desc: {
        flex: 7,
    },
    val: {
        flex: 3,
        paddingRight: 10,
        fontSize: 24,
        textAlign: 'right',
    },
    label: {
        marginBottom: 5,
        color: '#778E9F',
    },
    time: {
        color: '#C1CBD2'
    }
});

export default class MyIntegral extends Component{
    constructor(props) {
        super(props);
    }

    _gotoHome(){
        this.props.navigator.pop();
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
                <View style={styles.header}>
                    <TouchableOpacity style={styles.rule} onPress={() => this._gotoScene('积分规则')}>
                        <Image source={require('../../images/help.png')} />
                        <Text style={styles.ruleText}>积分规则</Text>
                    </TouchableOpacity>
                    <Text style={styles.ruleText}>当前积分</Text>
                    <Text style={styles.interfral}>9482</Text>
                    <View style={styles.action}>
                        <TouchableOpacity style={styles.btn} onPress={() => this._gotoHome()}>
                            <Text style={styles.btnText}>积分商城</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => this._gotoScene('兑换记录')}>
                            <Text style={styles.btnText}>兑换记录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View style={styles.item}>
                            <View style={styles.desc}>
                                <Text style={styles.label}>每日签到</Text>
                                <Text style={styles.time}>2016-12-18 15:33:29</Text>
                            </View>
                            <Text style={styles.val}>+1</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.desc}>
                                <Text style={styles.label}>每日签到</Text>
                                <Text style={styles.time}>2016-12-18 15:33:29</Text>
                            </View>
                            <Text style={styles.val}>+1</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.desc}>
                                <Text style={styles.label}>每日签到</Text>
                                <Text style={styles.time}>2016-12-18 15:33:29</Text>
                            </View>
                            <Text style={styles.val}>+1</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.desc}>
                                <Text style={styles.label}>每日签到</Text>
                                <Text style={styles.time}>2016-12-18 15:33:29</Text>
                            </View>
                            <Text style={styles.val}>+1</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.desc}>
                                <Text style={styles.label}>每日签到</Text>
                                <Text style={styles.time}>2016-12-18 15:33:29</Text>
                            </View>
                            <Text style={styles.val}>+1</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}