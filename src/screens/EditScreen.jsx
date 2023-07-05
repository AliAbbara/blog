import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { useState, useContext, useEffect } from 'react'

export default function EditScreen({ navigation }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')

  const { state, editBlogPost } = useContext(Context)
  const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))

  useEffect(() => {
    setTitle(blogPost.title)
    setContent(blogPost.content)
  }, [])

  const submitBlogPost = () => {
    if (title === '' || content === '') {
      setMessage('PLEASE FILL THE FIELDS YA KHARA!')
    } else if (title.length < 5) {
      setMessage('TITLE SHOULD BE AT LEAST 5 CHARACTERS YA 7MAR!')
    } else if (content.length < 8) {
      setMessage('CONTENT SHOULD BE AT LEAST 8 CHARACTERS W2ER')
    } else {
      editBlogPost({ title, content, id: blogPost.id })
      setTitle('')
      setContent('')
      navigation.navigate('Index')
    }
  }

  return (
    <View className='p-2'>
      <Text className='text-2xl self-center'>Edit Blogpost</Text>
      <Text className='text-lg'>Edit Title:</Text>
      <TextInput
        className='bg-white py-1 px-2 my-1 rounded-lg'
        value={title}
        placeholder='Title for the blogpost'
        onChangeText={setTitle}
      />
      <Text className='text-lg'>Edit Content:</Text>
      <TextInput
        className='h-22 bg-white py-1 px-2 my-1 rounded-lg'
        value={content}
        placeholder='Content of the blogpost'
        onChangeText={setContent}
      />
      <Text className='text-lg self-center'>{message}</Text>
      <TouchableOpacity
        className='items-center mt-10 bg-blue-600 p-4 rounded-lg w-full'
        onPress={submitBlogPost}>
        <Text className='text-white'>Update Blog Post</Text>
      </TouchableOpacity>
    </View>
  )
}
