import React, { useState } from "react";
import { Text, View } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
export default function Main() {
  const [current, setCurrent] = useState("test");

  return (
    <View style={{ marginTop: 50 }}>
      <RadioButtonGroup
        containerStyle={{ marginBottom: 10 }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="green"
      >
        <RadioButtonItem value="producer" label="Producer" />
        <RadioButtonItem value="distributor" label="Distributor" />
      </RadioButtonGroup>
    </View>
  );
}