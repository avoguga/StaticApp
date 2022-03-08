import React, { useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";

const Home = ({}) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}></View>
    </View>
  );
};

export default Home;
