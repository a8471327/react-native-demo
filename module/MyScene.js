import React, {
    Component,
    PropTypes
} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableOpacity onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text>点我返回上一场景</Text>
                </TouchableOpacity>
            </View>
        );
    }
}