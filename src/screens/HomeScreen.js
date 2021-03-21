import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const App=(props)=> {
  return (
    <View>
  

<View style={styles.view} />
<TouchableOpacity onPress={()=>props.navigation.navigate('Color')} style={styles.style}>
      <Text  style={styles.text}>
        Click to go to Color Screen
      </Text >
    </TouchableOpacity>


    

</View>
  );
}

const styles = StyleSheet.create({
  style: {
    elevation:6,
    backgroundColor:'black',
    borderRadius:10,
    paddingHorizontal:12,
    paddingVertical:12
  },
  text:{
    frontSize:18,
    color:'white',
    alignSelf:'center',
  },
  view:{
    margin:10
  }

});
export default App;
