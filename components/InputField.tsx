import { KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native"

const InputField =({label,labelStyle})=>(
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className="my-2 w-full">
                <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)

export default InputField