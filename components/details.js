import React from 'react'
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard , Dimensions,TextInput,Button } from 'react-native';

export default function Details({ navigation }) {
   
    return (
        <View>
            <Text>{ navigation.getParam('text') }</Text>
            <Text>{ navigation.getParam('time') }</Text>
                <View>
                <TextInput 
                // style = {styles.input}
                placeholder = 'new todo ....'
                // onChangeText={(text)=>changeHandle(text)}
                />
                <Button  title='add todo' color='coral' />
                </View>
        </View>
    )
}

