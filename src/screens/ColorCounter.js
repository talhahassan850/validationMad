import React, { useState } from "react";
import { View,Button,FlatList } from "react-native";


const ColorCounter= () => {

    const [colors, setColor] = useState([]);         
	console.log(colors);

return (
    <View>
        <Button title="Add a Color" 
		onPress={()=> {
            setColor([...colors,randomRgb()])      
        }} />

        <FlatList 
		 data={colors}                                  
          keyExtractor={(item)=>item} 
         renderItem={({item}) =>{
              return  <View style={{ height:100, width:100,marginTop:10,
				backgroundColor: item }} />
          }}

       />
	   <View 
	style={{height:100,width:100, backgroundColor:randomRgb()}}
	/>

    </View>
    );
}

	const randomRgb=()=>{
		const red = Math.floor(Math.random()*256);
		const green = Math.floor(Math.random()*256);
		const blue = Math.floor(Math.random()*256);
		return `rgb(${red},${green},${blue})`;
	};
	

export default ColorCounter;