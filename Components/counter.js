import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native';

export default class Counter extends Component {
    render(){
        return (
            <View>                
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 50}}>
                        <Button  title = "Increment" onPress={()=>this.props.addClick(100)}/>
                    </View>
                    <Text style={{textAlign: 'center', marginLeft: 15, fontSize:25, color: 'green'}}>{this.props.cnt}</Text>
                    <View style={{marginLeft: 15}}>
                        <Button title = "Decrement" onPress={()=>this.props.decClick(100)}/>
                    </View>
                </View>
                <View style={{marginLeft: 50, marginTop: 10, marginRight: 60}}>
                    <Button title = "Reset" color= "orange" onPress={()=>this.props.resetClick()} />
                </View>
            </View>
        );
    }
}