import React from 'react';
import { StyleSheet,TextInput,Pressable, } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your Account</Text>
      <TextInput style={styles.input} placeholder="Email"
        keyboardType="numeric">
      </TextInput>
      <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />
      <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirm Password" />
      <Pressable style={styles.button} onPress={()=>{}}>
      <Text style={styles.text}>Submit</Text>
    </Pressable>
    <View style={styles.social}>
    <Text style={styles.other}>- Or Sign up with -</Text>
    <View style={styles.icons}>
    <MaterialCommunityIcons name="google-plus" size={40} color="#db4a39" />
    <MaterialCommunityIcons name="facebook" size={40} color="#4267B2" />
    <MaterialCommunityIcons name="twitter" size={40} color="#1DA1F2" />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    width:'70%',
    marginBottom:10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#800080',
    width: '70%',
    marginTop:10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
   margin:20,
   width:'70%',
   height:40,
   shadowColor: '#F9F6EE',
   shadowOffset: {width: 0, height: 1},
   shadowOpacity: 0.2,
   elevation: 1,
   borderColor: '#F9F6EE',
    borderWidth: 2,
    borderRadius: 10,
    color:'gray',
    padding:5,
  },
  social: {
    marginTop:60,
    alignItems:'center',
  },
  other: {
    
  },
  icons: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:10,
    width:'80%',
  },

});
