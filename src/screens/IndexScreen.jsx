import { View, Text, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'
import { useContext } from 'react'

export default function IndexScreen() {
  const blogPosts = useContext(BlogContext)

  return (
    <View>
      <Text>asdasd</Text>
      <FlatList
        data={blogPosts}
        ketExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}
