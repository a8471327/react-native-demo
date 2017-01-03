import React, {
    Component,
    PropTypes
} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#6A7D8F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        color: '#fff',
        fontSize: 18,
        flex: 5,
        textAlign: 'center'
    },
    backBtn: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    _onPressBack() {
        this.props.navigator.pop()
    }
    _showBack() {
        if (this.props.hasBack == 1) {
            return (
                <TouchableOpacity  style={styles.backBtn} onPress={() => this._onPressBack()}>
                    <View style={styles.title}>
                        <Image source={require('../../images/back.png')} />
                    </View>
                </TouchableOpacity>
            )
        }
    }
    render() {
        return (
            <View style={styles.header}>
                {this._showBack()}
                <Text style={styles.name} numberOfLines={1}>{this.props.title}</Text>
                <Text style={{flex:this.props.hasBack == 1 ? 1 : 0}}></Text>
            </View>
        )
    }
}