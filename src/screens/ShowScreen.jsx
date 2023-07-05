import { View, Text, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { Foundation } from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

export default function ShowScreen({ navigation }) {
  const { state } = useContext(Context)
  const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))
  return (
    <View className='p-2'>
      <Text className='text-xl self-center mb-2'>
        *Blog Title: {blogPost.title}
      </Text>
      <Text className='text-lg'>*Blog Content: {blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        className='mr-2'
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }>
        <Foundation name='pencil' size={24} />
      </TouchableOpacity>
    ),
  }
}
