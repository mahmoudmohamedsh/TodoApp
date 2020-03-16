import React, { useState } from 'react';
import { StyleSheet
  ,Text
  ,TouchableOpacity
  , View
  , FlatList
  , Alert
  , TouchableWithoutFeedback
  , Keyboard
  , CheckBox } from 'react-native';
import Header from './header';
import { MaterialIcons} from '@expo/vector-icons';
// import TodoItem from './todoItem';
import AddTodo from './addTodo';
//import { CheckBox } from 'react-native-elements'

export default function Home({ navigation }) {
  const [todos, setTodos] = useState([
    { text: 'buy coffe',time:'from 10 Am to 11 Am', key: '1' ,check:false},
    { text: 'create an app',time:'from 2 Pm to 4 Pm', key: '2' ,check:false},
    { text: 'play on the switch',time:'from 5 Pm to 6 Pm', key: '3',check:false }
  ]);
  
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    } else {
      Alert.alert('oppos', 'todo must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }

      ]);
    }

  }
  //hy3ml delete gwa al details w lltodo w y3mlha add tany fo2
  const submit = (text,key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
    setTodos((prev)=>{
      return [
        {test:text,key:Math.random().toString()},
        ...prev
      ]
    })
  }
  //by8er al check l true ow false
  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => {if((todo.key != key)== false){todo.check = !todo.check}return true });
    })
  }
  //by3ml update
  const PressUpdateHandler = (key,text) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => {if((todo.key != key)== false){todo.text = text}return true });
    })
  }
  // by3ml delete ll todo
  const ay5ra = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("Dismissed");
    }}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          <AddTodo submitHandler={submitHandler}
          />

          <View style ={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                
                  <View style={styles.item}>
                    <View style={{flexDirection:'row'}}> 
                     <TouchableOpacity onPress={() =>ay5ra(item.key) }style={{ flexDirection: 'row'}}>
                  <MaterialIcons name='delete'  size={18} color={'#333'}/>
                  </TouchableOpacity>

                  <View style={{ flexDirection: 'row',flex:1 }}> 
                      <TouchableOpacity onPress={() => navigation.navigate('Details',{item,PressUpdateHandler},submit)} style={{ flexDirection: 'row',flex:1 }}>
                          <Text style={item.check?styles.t:styles.f}>{item.text}</Text>
                      </TouchableOpacity>
                    <CheckBox style={styles.c} value= {item.check} onChange={()=>pressHandler(item.key)}/>
                  </View>

                  </View>
                  </View>
                
              )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      
      
               
      
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    marginTop: 10,
    alignItems: 'center',
    flex:1,

  },
item: {
  flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
  
  
},t:{
  textDecorationLine:"line-through",
  flexShrink: 1
},f:{
  textDecorationLine:"none",
  flexShrink: 1
},c:{
  marginLeft:20,
  
}
});

