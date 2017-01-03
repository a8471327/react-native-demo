import React, {
    Component,
    PropTypes
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from 'react-native';

import ViewPager from 'react-native-viewpager';

// 屏幕宽度
let {height, width} = Dimensions.get('window');

class DateBoard extends React.Component {
    static defaultProps = {
        year: 2016,
        month: 0
    };
    static propTypes = {
        year: React.PropTypes.number,
        month: React.PropTypes.number,
        selectDay: React.PropTypes.func,
        isLeap: React.PropTypes.func,
        date: React.PropTypes.number
    };

    constructor(props) {
        super(props);
    };

    isLeap(year) {
        return ((year % 100 == 0) ? (year % 400 == 0 ? 1 : 0) : (year % 4 == 0) ? 1 : 0);
    };

    renderDate() {
        let myMonth, myYear = 0;
        if (this.props.month == 12) {
            myMonth = 0;
            myYear = this.props.year + 1;
        } else if (this.props.month == -1) {
            myMonth = 11;
            myYear = this.props.year - 1;
        } else {
            myMonth = this.props.month;
            myYear = this.props.year
        }
        let fd = new Date(myYear, myMonth, 1);
        let firstDay = fd.getDay();
        let monthDay = [31, 28 + this.isLeap(this.props.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let arr = [];
        for (let i = 0; i < firstDay; i++) {
            arr.push(<View key={-i} style={styles.dateBox}></View>)
        }
        for (var i = 1; i < monthDay[myMonth] + 1; i++) {
            if (this.props.date == i) {
                arr.push(
                    <View key={i} style={[styles.dateBox, styles.selected, {backgroundColor: '#35c0c5'}]}>
                        <Text style={[styles.dateText, {color: '#fff', fontWeight: 'bold'}]}>{i}</Text>
                    </View>
                )
            } else {
                arr.push(
                    <View key={i} style={[styles.dateBox, styles.selected]}>
                        <Text style={styles.dateText}>{i}</Text>
                    </View>
                )
            }
        }
        return arr;
    };

    render() {
        return (
            <View style={styles.dateBoard}>
                {this.renderDate()}
            </View>
        )
    }
}

export default class Calendar extends Component{
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }

    selectDay(){

    }

    fetchData(){

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.dayTitle}>
                        <Text style={styles.t1}>
                            {this.state.year + '年' + (this.state.month + 1) + '月' + (this.state.date) + '日'}
                        </Text>
                    </View>
                </View>
                <View style={styles.dateTitle}>
                    <Text style={styles.dateTitleText}>日</Text>
                    <Text style={styles.dateTitleText}>一</Text>
                    <Text style={styles.dateTitleText}>二</Text>
                    <Text style={styles.dateTitleText}>三</Text>
                    <Text style={styles.dateTitleText}>四</Text>
                    <Text style={styles.dateTitleText}>五</Text>
                    <Text style={styles.dateTitleText}>六</Text>
                </View>
                <DateBoard
                    year={this.state.year}
                    month={this.state.month}
                    date={this.state.date}
                    selectDay={this.selectDay.bind(this)}
                    fetchData={this.fetchData.bind(this)}
                />
            </View>
        );
    }
}

width = width -20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    head: {
        height: 40,
        backgroundColor: '#000',
        flexDirection: 'row'
    },
    dayTitle: {
        flex: 1,
        height: 40,
        justifyContent: 'center'
    },
    t1: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
    },
    dateTitle: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderBottomWidth: .5,
        borderColor: '#ddd'
    },
    dateTitleText: {
        width: width / 7 - 1,
        textAlign: 'center',
        fontSize: 10,
    },
    dateBoard: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc'
    },
    dateBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 7 - 1,
        height: width / 7 - 1,
    },
    dateText: {
        fontSize: 14,
    },
    lunarFont: {
        fontSize: 9,
    },
    selected: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 7 - 1,
        height: width / 7 - 1,
        borderRadius: (width / 7 - 1) / 2,
    },
});