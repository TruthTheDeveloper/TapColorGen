import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { StyleSheet, View , Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';

export default function HomeScreen() {

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [tapCount, setTapCount] = useState(0);

  const handleScreenTap = () => {

  }
  



   <SafeAreaView>
    <TouchableWithoutFeedback onPress={handleScreenTap}>
    <View style={[styles.container, { backgroundColor }]}>
        <ThemedText type='title'>Hello there</ThemedText>
        <ThemedText style={styles.colorInfo}>Current Color: {backgroundColor}</ThemedText>
      </View>
    </TouchableWithoutFeedback>
   </SafeAreaView>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  colorInfo: {
    fontSize: 16,
  },
});
