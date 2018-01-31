import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native';

export default class Counter extends Component {
    render(){
        return (
            <View>
                
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 10}}>
                        <Button  title = "Increment" onPress={()=>this.props.addClick(5)}/>
                    </View>
                    <Text style={{textAlign: 'center', marginLeft: 10, fontSize:25, color: 'green'}}>{this.props.cnt}</Text>
                    <View style={{marginLeft: 10}}>
                        <Button title = "Decrement" onPress={()=>this.props.decClick(5)}/>
                    </View>
                </View>
            </View>
        );
    }
}