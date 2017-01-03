import React, {
    Component,
    PropTypes
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView
} from 'react-native';

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        marginBottom: 16
    },
    label: {
        color: '#778E9F',
        fontWeight: '700'
    },
    desc: {
        lineHeight: 24,
        color: '#778E9F'
    }
});

const dataList = [
    {
        label: '什么是积分',
        desc: '积分是百洋商城给予用户的奖励，初始积分为0'
    },
    {
        label: '积分有什么用',
        desc: '积分可以在百洋商城APP积分商城中兑换优惠券等礼品，更多积分活动即将上线，敬请期待'
    },
    {
        label: '如何获得积分',
        desc: '1、购物返积分：用户在百洋商城成功消费，可以获得订单实际支付金额*0.5的积分返还（积分精确到个位，小数点后全部舍弃，不进行四舍五入）\n2、签到获得积分：用户每日可签到1次并获取积分奖励，连续签到还有额外积分，具体以签到规则为准\n3、通过参与百洋商城活动，获得积分奖励，具体以活动通知为准'

    },
    {
        label: '积分有效期',
        desc: '积分自获得开始至次年年底有效，逾期自动失效'
    }
]

export default class Rule extends Component{
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(dataList),
        };
    }

    _getItem({label, desc}){
        return (
            <View style={styles.item}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._getItem(rowData)}
                />
            </View>
        );
    }
}