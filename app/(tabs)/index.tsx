import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { StyleSheet, View , Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';

export default function HomeScreen() {

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleScreenTap = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);


  }
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={handleScreenTap}>
        <View style={[styles.container, { backgroundColor }]}>
          <ThemedText type='title'>Hello there</ThemedText>
          <ThemedText style={styles.colorInfo}>Current Color: {backgroundColor}</ThemedText>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )

   
  
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  colorInfo: {
    fontSize: 16,
  },
});