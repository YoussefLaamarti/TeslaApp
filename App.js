import { StatusBar } from 'expo-status-bar';
import {   Dimensions, FlatList, StyleSheet,  View } from 'react-native';
import Car from './components/Cars/Car';
import Navbar from './components/Navbar/Navbar';
export default function App() {


  const carsData = [
    {
      id: '1',
      title: 'Model Y',
      subtitle: 'Starting at 43 000 $',
      image: require('./assets/ModelY.jpeg'),
    },
    {
      id: '2',
      title: 'Model S',
      subtitle: 'Starting at 82 000 $',
      image: require('./assets/ModelS.jpeg'),
    },
    {
      id: '3',
      title: 'Model X',
      subtitle: 'Starting at 91 000 $',
      image: require('./assets/ModelX.jpeg'),
    },
    {
      id: '4',
      title: 'Model 3',
      subtitle: 'Starting at 21 000 $',
      image: require('./assets/Model3.jpeg'),
    },
    {
      id: '5',
      title: 'Solar Panels',
      subtitle: 'Starting at 154 000 $',
      image: require('./assets/SolarPanels.jpeg'),
    },
    {
      id: '6',
      title: 'Solar Roof',
      subtitle: 'Starting at 352 000 $',
      image: require('./assets/SolarRoof.jpeg'),
    },
    // add more cars as needed
  ];

  const renderItem = ({ item }) => (
    <Car title={item.title} subtitle={item.subtitle} image={item.image} />
  );


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
   <View style={styles.centerNav}>          
<Navbar/>
</View>         
  <FlatList
        data={carsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height }
      />
         
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  centerNav:{
    alignItems:'center'
  }

});
