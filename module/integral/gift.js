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
  TouchableOpacity
} from 'react-native';

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: deviceWidth / 2 - 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#6cf',
        borderTopWidth: 2,
        borderColor: '#F6F6F6',
    },
    leftBorder: {
        borderLeftWidth: 1,
    },
    rightBorder: {
        borderRightWidth: 1,
    },
    pic: {
        height: 120,
        width: deviceWidth / 2 - 1 - 20,
        marginTop: 10
    }
})

export default class Gift extends Component{
    constructor(props){
        super(props)

    }

    _gotoDetail(){
        this.props.action('礼品详情')
    }

    render(){
        return (
                <TouchableOpacity style={[styles.container, this.props.even ? styles.leftBorder : styles.rightBorder]} onPress={() => this._gotoDetail()}>
                    <Image style={styles.pic} source={require('../../images/1.jpg')} />
                    <Text>元旦优惠券</Text>
                    <Text>200积分</Text>
                </TouchableOpacity>
        )
    }
}