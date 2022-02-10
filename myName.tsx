//El primer paso es importar las librerias de React y los componentes de React-Native
import React,{useState} from 'react';
import {StyleSheet,Text,View,Pressable,TextInput,Button} from 'react-native';


const sayHi = (name:string) => {
  return `Hi! my name is ${name}`
}

const Counter = () =>{
  const [number,setNumber] = useState(0);
  const [havingDebt,setHavingDebt] = useState(false);
  
  return (
    <View style={styles.counterContainer}>
      <Text style={[styles.counterText,number==0 ? styles.black : 
       (havingDebt ? styles.red : styles.green)]}
       >   
       {number.toLocaleString()}
      </Text>
      <View style={styles.btnCounterContainer}>
        <Pressable 
        style={[styles.btnCounter,styles.paying]}
        onPress={()=>{
        if(number <= 0) {setHavingDebt(true)}
        else {setHavingDebt(false)}
        setNumber(number-1)
        }}
        >
          <Text>return a slice</Text>
        </Pressable>
        <Pressable 
        style={[styles.btnCounter,styles.taking]}
        onPress={()=>{
        if(number >=
         0){setHavingDebt(false)}
        else {setHavingDebt(true)}
        setNumber(number+1)
        }}
        >
          <Text>Eat a slice</Text>
        </Pressable>
      </View>
    </View>
  );
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
      <View style={!haveName ? styles.nameContainer :   
       styles.none}>
        <TextInput
          style={styles.inputName}
          placeholder="What is your name?"
          onChangeText={newText=>setName(newText)}
        />
        <Pressable style={styles.btnHaveName} onPress={()=>setIfHaveName(true)}
        >
          <Text style={styles.textSend}>OK</Text>
        </Pressable>
        
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
      <View style={styles.eatSpace}>
        <Eat food="Pizza" />
      </View>
      <View style={styles.counterSpace}>
        <Counter />
      </View>
    </View>
  );
}


//Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start'
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
  eatSpace: {
    minHeight: 100,
    margin: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    margin: 15,
    width: '91%',
    
  },
  counterSpace: {
    height: 130,
    margin: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    marginRight: 0,
    padding: 15,
    fontSize: 21,
    width: '80%'
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
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 52,
    marginBottom: 20,
    color: '#666',
    fontWeight: '600'
  },
  btnCounterContainer: {
    flex:1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  btnCounter: {
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10
  },
  textSend: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btnHaveName: {
    width: '15%',
    padding: 15,
    backgroundColor: '#1A8FE3',
    borderRadius: 5
  },
  paying: {
    backgroundColor: '#ffccd5',
  },
  taking: {
    backgroundColor: '#74c69d',
  },
  black: {color: '#666666'},
  red: {color: '#ffccd5'},
  green: {color: '#74c69d'}
  
})


export default Cat;