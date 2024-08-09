import { ThemedText } from '@/components/ThemedText';
import { useColorChange } from '@/hooks/useColorChange';
import { homeScreenStyles } from '@/styles';
import {  View , SafeAreaView, TouchableWithoutFeedback} from 'react-native';


interface InfoProps {
  label: string;
  value: string | number;
  style: object;
}

const Info: React.FC<InfoProps> = ({ label, value, style }) => (
  <ThemedText style={style}>{label}: {value}</ThemedText>
);

export default function HomeScreen() {
  const { backgroundColor, tapCount, handleScreenTap } = useColorChange();
  const message = 'Hello there';


  return (
    <SafeAreaView style={homeScreenStyles.safeArea}>
      <TouchableWithoutFeedback onPress={handleScreenTap}>
        <View style={[homeScreenStyles.container, { backgroundColor }]}>
          <ThemedText type='title' style={homeScreenStyles.mainText}>{message}</ThemedText>
          <Info 
            label="Current Color" 
            value={backgroundColor} 
            style={homeScreenStyles.colorInfo} 
          />
          <Info 
            label="Taps" 
            value={tapCount} 
            style={homeScreenStyles.tapCount} 
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )

   
  
}

