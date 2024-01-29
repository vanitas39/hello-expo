import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item1}></View>
      <View style={styles.item2}></View>
      <View style={{flex: 3, flexDirection:'row', backgroundColor: 'gray',gap: 10}}>
        <View style={styles.item3_1}></View>
        <View style={styles.item3_2}></View>
        <View style={styles.item3_3}></View>
        <View style={styles.item3_4}></View>
      </View>
      <View style={styles.item4}></View>
      <View style={styles.item5}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: 'white',
  },

  item1: {
    flex: 1,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: 'red',
  },
  item2: {
    flex: 2,
    height: 100,
    backgroundColor: 'green',
  },
  item3_1: {
    flex:1,
    //height: 100,
    backgroundColor: 'tomato',
  },
  item3_2: {
    flex:2,
    //height: 100,
    backgroundColor: 'springgreen',
  },
  item3_3: {
    flex:2,
    //height: 100,
    backgroundColor: 'peru',
  },
  item3_4: {
    flex:1,
    //height: 100,
    backgroundColor: 'olive',
  },
  item4: {
    flex: 2,
    height: 100,
    backgroundColor: 'purple',
  },
  item5: {
    flex: 1,
    height: 100,
    backgroundColor: 'olive',
  },
});
