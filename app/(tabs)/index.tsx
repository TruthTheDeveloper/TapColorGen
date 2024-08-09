import { ThemedText } from '@/components/ThemedText';
import { homeScreenStyles } from '@/styles';
import { generateRandomColor } from '@/utilities/generateRandomColors';
import { useCallback, useState } from 'react';
import {  View , SafeAreaView, TouchableWithoutFeedback} from 'react-native';



export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [tapCount, setTapCount] = useState(0);
  const message = 'Hello there';


  const handleScreenTap = useCallback(() => {
     // generate random color and set has background color
    setBackgroundColor(generateRandomColor());
    setTapCount(prevCount => prevCount + 1); // increment tap count
  }, []);



  return (
    <SafeAreaView style={homeScreenStyles.safeArea}>
      <TouchableWithoutFeedback onPress={handleScreenTap}>
        <View style={[homeScreenStyles.container, { backgroundColor }]}>
          <ThemedText type='title' style={homeScreenStyles.mainText}>{message}</ThemedText>
          <ThemedText style={homeScreenStyles.colorInfo}>Current Color: {backgroundColor}</ThemedText>
          <ThemedText style={homeScreenStyles.tapCount}>Taps: {tapCount}</ThemedText>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )

   
  
}

