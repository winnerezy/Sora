import { View, Text } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const Discover = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View className="flex w-full h-screen flex-col gap-6 px-2">
          <Text className="text-white mt-20 text-4xl font-bold tracking-wider">
            Discover
          </Text>
          <Text className="text-white text-3xl font-semibold">Hot Picks</Text>
          <ScrollView horizontal={true}>
            <View className="flex gap-6 flex-row w-full items-start justify-between h-60">
              <View className="size-60 border-2 border-white rounded-lg"></View>
              <View className="size-60 border-2 border-white rounded-lg"></View>
              <View className="size-60 border-2 border-white rounded-lg"></View>
              <View className="size-60 border-2 border-white rounded-lg"></View>
              <View className="size-60 border-2 border-white rounded-lg"></View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Discover;
