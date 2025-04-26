import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the navigation param list (your app's routes)
type RootStackParamList = {
  index: undefined; // Route for the Index screen
  "/movies/sad": { id: string }; // Route for the movies/sad screen (adjust params as needed)
};

// Define the navigation prop type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Index() {
  // Use the navigation hook with the correct type
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl text-blue-800 font-bold">Welcome!</Text>
      <TouchableOpacity
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
        onPress={() => navigation.navigate("/movies/sad", { id: "sad" })} // Correct navigation call
      >
        <Text className="text-white font-semibold">Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}
