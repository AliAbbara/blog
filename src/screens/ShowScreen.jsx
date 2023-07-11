import { View, Text } from 'react-native'
import { useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function ShowScreen({ route }) {
  const { state } = useContext(Context)
  const blogPost = state.find((blog) => blog.id === route.params.id)
  return (
    <View className='p-2'>
      <Text className='text-xl self-center mb-2'>
        *Blog Title: {blogPost.title}
      </Text>
      <Text className='text-lg'>*Blog Content: {blogPost.content}</Text>
    </View>
  )
}
