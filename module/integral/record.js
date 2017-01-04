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
  ScrollView
} from 'react-native';

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        paddingHorizontal: 15,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: '#f6f6f6'
    },
    desc: {
        flex: 7,
    },
    val: {
        flex: 3,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    valText: {
        fontSize: 16,
    },
    label: {
        marginBottom: 5,
        color: '#778E9F',
    },
    time: {
        color: '#C1CBD2'
    }
});

export default class Record extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.desc}>
                            <Text style={styles.label}>全场通用50-10优惠券</Text>
                            <Text style={styles.time}>兑换时间：2016-12-18 15:33:29</Text>
                        </View>
                        <View style={styles.val}>
                            <Image source={require('../../images/money.png')} />
                            <Text style={styles.valText}>100</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}