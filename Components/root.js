import CounterContainer from '../Container/counterContainer.js';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Root extends Component{
    render(){
        return (
            <View>
                <Text>App Counter Redux</Text>
                <CounterContainer />
            </View>
        );
    }
}