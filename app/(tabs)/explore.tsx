import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Explore = () => {
  return (
    <GestureHandlerRootView>
      <View className='w-full min-h-screen px-2 flex flex-col gap-4'>
        <Text className="text-white mt-20 text-4xl font-bold tracking-wider">
          Explore
        </Text>
        <TextInput className='bg-white h-10 rounded-lg p-2' placeholder='Search for songs...'/>
      </View>
    </GestureHandlerRootView>
  )
}

export default Explore