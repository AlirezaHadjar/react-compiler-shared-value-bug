import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  const translateX = useSharedValue(0);

  const onPress = () => {
    translateX.value = withTiming((Math.random() - 0.5) * 100);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Update Value" onPress={onPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "violet",
  },
});
