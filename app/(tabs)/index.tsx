import { ThemedText } from '@/components/ThemedText';
import { useEffect, useState } from 'react';
import { StyleSheet, View , Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';

export default function HomeScreen() {

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [tapCount, setTapCount] = useState(0);
  const [message, setMessage] = useState('Hello there');

  
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleScreenTap = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);
    setTapCount(prevCount => prevCount + 1);



  }

  

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={handleScreenTap}>
        <View style={[styles.container, { backgroundColor }]}>
          <ThemedText type='title'>{message}</ThemedText>
          <ThemedText style={styles.colorInfo}>Current Color: {backgroundColor}</ThemedText>
          <ThemedText style={styles.tapCount}>Taps: {tapCount}</ThemedText>
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

  tapCount: {
    fontSize: 18,
    marginBottom: 10,
  },
});