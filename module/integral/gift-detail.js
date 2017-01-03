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
} from 'react-native';

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 180,
        backgroundColor: '#C1CBD2',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 16
    },
    require: {
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'space-between'
    },
    requireColor: {
        color: '#778E9F',
        fontSize: 16
    },
    partContent: {
        marginTop: 12,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    partLabel: {
        borderLeftWidth: 6,
        borderColor: '#9FADB9',
        paddingLeft: 10
    },
    partDesc: {
        paddingTop: 5
    },
    exchange: {
        backgroundColor: '#C1CBD2',
        width: deviceWidth * 0.9,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class Gift extends Component{
    constructor(props){
        super(props)
    }

    partContent(label, arr){
        arr = Array.isArray(arr) ? arr : [arr];
        return (
            <View style={styles.partContent}>
                <Text style={styles.partLabel}>{label}</Text>
                <View style={styles.partDesc}>
                    {arr.map((elem, i) => <Text key={i}>{elem}</Text>)}
                </View>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{paddingHorizontal: 40}}>
                        <Text style={styles.headerText}>
                            <Text style={{fontSize: 20}}>&#165;</Text>
                            <Text style={{fontSize: 50}}>10</Text>
                        </Text>
                        <Text style={styles.headerText}>满50元使用</Text>
                    </View>
                    <Text style={styles.headerText}>全场10元优惠券</Text>
                </View>
                <View style={styles.require}>
                    <Text style={styles.requireColor}>元旦优惠券大礼包</Text>
                    <Text style={{paddingTop: 10}}>
                        <Text style={{color: '#2F99CC'}}>200</Text>
                        <Text style={styles.requireColor}> 积分</Text>
                    </Text>
                </View>
                {this.partContent('礼品简介', '全场通用50-10优惠券 x1')}
                {this.partContent('使用须知', [
                    '1、礼包内优惠券兑换后7天内可使用',
                    '2、礼包内优惠券全场通用（不含海外购商品）',
                    '3、如有问题请联系客服'
                ])}
                {this.partContent('兑换规则', [
                    '1. 点击“立即兑换”按钮完成兑换，优惠券将直接发放到您的百洋商城账号中',
                    '2. 兑换完成后，可在“我的-优惠券”中查看',
                    '3. 每个用户仅限兑换n次',
                    '4. 如遇恶意兑换行为，百洋商城有权取消用户兑换资格'
                ])}
                <View style={{paddingVertical: 5, backgroundColor: '#fff', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.exchange}>
                        <Text style={{color: '#fff'}}>立即兑换</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}