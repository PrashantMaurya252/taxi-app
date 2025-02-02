import { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";
import Map from "./Map";

const GoogleTextInput = ({
  icons,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    
  </View>
);

export default GoogleTextInput;
