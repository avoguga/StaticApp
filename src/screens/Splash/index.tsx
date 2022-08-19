import React from "react";
import LottieView from "lottie-react-native";

import {Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Splash() {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <LottieView
                source={require("../../img/animation.json")}
                autoPlay
                loop={false}
                // @ts-ignore
                onAnimationFinish={() => navigation.navigate("Home")}
            />
        </View>
    )
}