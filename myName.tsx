//El primer paso es importar las librerias de React y los componentes de React-Native
import React,{useState} from 'react';
import {StyleSheet,Text,View,Pressable,TextInput,Button} from 'react-native';


const sayHi = (name:string) => {
  return `Hi! my name is ${name}`
}

//Componente dentro de otro
const Eat = (props:any) => {
  const [isHungry,setIsHungry] = useState(true);
  return (
    <View style={styles.eatingContainer}>
      <Text style={isHungry ? styles.hungry : styles.notHungry} >
        Yes, I am {isHungry ? 'too hungry' : `eating ${props.food}`}
      </Text>
      <Pressable
        style={ isHungry ? styles.eatBtn : styles.hungryBtn}
        onPress={()=>setIsHungry(false)} 
      >
        <Text style={isHungry ? styles.hungryText : styles.notHungryText}>{isHungry ? `I wanna eat ${props.food}` : `I am full`} </Text>
      </Pressable>
    </View>
  );
}

const Greetings = (props:any) => {
  const [haveName,setIfHaveName] = useState(false);
  const [name,setName] = useState(props.name);
  return (
    <View style={styles.greetingContainer}>
      <Text style={haveName ? styles.greeting : styles.none}>
         Hi! my name is 
         <Text style={{fontWeight: 'bold'}}> {name}</Text>
      </Text>
      <View style={ haveName ? styles.none : styles.container  }>
        <TextInput
          style={styles.inputName}
          placeholder="What is your name?"
          onChangeText={newText=>setName(newText)}
        />
        <Button 
          onPress={()=>setIfHaveName(true)}
          title="That's my name"
        />
        
      </View>
    </View>
  );
}

//Luego creamos nuestro componente de funcion donde renderiza todo lo que le retornemos
const Cat = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First App</Text>
      <Greetings name="Anonymous" />
      <Eat food="Pizza" />
    </View>
  );
}


//Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    marginTop: 50,
    marginLeft: 15,
    marginBottom: 40,
    marginRight: 15,
    fontSize: 48,
    fontWeight: '600',
    color: '#1A8FE3'
  },
  question: {
    marginLeft: 15,
    marginBottom: 0,
    fontSize: 18,
    fontWeight: '500'
  },
  greeting: {
    fontWeight: '300',
    color: '#333333',
    paddingLeft: 15,
    paddingRight: 60,
    fontSize: 18
  },
  inputName: {
    backgroundColor: '#F8F8F8',
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 5,
    fontSize: 21,
  },
  none: {
    display: 'none'
  },
  hungry: {
    color: 'red',
    fontSize: 14
  },
  notHungry: {
    color: 'green',
    fontSize: 16,
    fontWeight: '700'
  },
  greetingContainer: {
    
    width: '100%',
    paddingTop: 0,
    paddingBottom: 20
  },
  eatingContainer: {
    flex: 1,
    height: '200px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'nowrap',
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    
  },
  spaces: {
    marginTop: 15,
    marginBottom: 15
  },
  eatBtn: {
    backgroundColor: '#1A8FE3',
    padding: 10,
    borderRadius: 10
  },
  hungryBtn: {
    backgroundColor: '#c7f9cc',
    padding: 10,
    borderRadius: 10
  },
  hungryText: {
    color: 'white'
  },
  notHungryText: {
    color: 'green',
    fontWeight: '600'
  }
})


export default Cat;