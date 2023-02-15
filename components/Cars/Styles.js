import { StyleSheet , Dimensions } from 'react-native'

const styles = StyleSheet.create({
 
    carContainer:{
      width:'100%',
      height:Dimensions.get('window').height,
    },
    carTitles:{
      marginTop:'30%',
      width:'100%',
      alignItems:'center',
    },
    title:{
       fontSize: 40, 
       fontWeight: '500'
    },
    subtitle:{
      fontSize: 16,
      color: 'gray',
    },
    image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover',
      position:'absolute',
    },
    buttonContainer:{
      alignItems:'center',
      justifyContent:'center',
    marginTop:'100%',
    },
  
  });
  
  export default styles;