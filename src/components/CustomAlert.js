import { Alert } from "react-native";

export default function CustomAlert({title, message}) {
    return (
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        )
    );
}
