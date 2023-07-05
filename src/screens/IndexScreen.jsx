import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { useContext } from 'react'
import { Feather } from '@expo/vector-icons'

export default function IndexScreen({ navigation }) {
  const { state, deleteBlogPost } = useContext(Context)

  return (
    <View>
      <FlatList
        data={state}
        ketExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
              className='h-12 p-2 border-t-2 border-black flex-row justify-between'>
              <Text className='text-lg'>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name='trash-2' size={24} />
              </TouchableOpacity>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        className='mr-1'
        onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  }
}
