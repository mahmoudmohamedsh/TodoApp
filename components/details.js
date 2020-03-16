import React ,{ useState }from 'react'
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard , Dimensions,TextInput,Button } from 'react-native';

export default function Details({ navigation }) {
    const [text,setText] = useState('')

    const changeHandle = ( text )=>{
        setText(text)
    }
    const h = navigation.getParam('PressUpdateHandler');
    return (
        <View>
            {console.log(navigation)}
            <Text>{ navigation.getParam('item').text }</Text>
            <Text>{ navigation.getParam('item').time }</Text>
                <View>
                <TextInput 
                // style = {styles.input}
                // placeholder = 'new todo ....'
                value={text == '' ?navigation.getParam('item').text:text }
                onChangeText={(text)=>changeHandle(text)}
                />
                <Button  title='add todo' color='coral' 
                onPress={()=>h(navigation.getParam('item').key,text)}
                    />
                </View>
        </View>
    )
}

