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
} from 'react-native';

import ViewPager from 'react-native-viewpager';

// 屏幕宽度
const deviceWidth = Dimensions.get('window').width;

const IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=120',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=120',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=120'
];

const styles = StyleSheet.create({
    page: {
        width: deviceWidth,
    },
});

export default class Swipe extends Component{
    constructor(props) {
        super(props);
        let ds = new ViewPager.DataSource({pageHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithPages(IMGS),
        };
    }

    render() {
        return (
            <ViewPager
                style={this.props.style}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={false}
                locked={false}/>
        );
    }

    _renderPage(data: Object, pageID: number | string) {
        return (
            <Image source={{uri: data}} style={styles.page} />
        );
    }
}