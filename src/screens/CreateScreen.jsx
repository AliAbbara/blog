import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState, useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function CreateScreen() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')

  const { addBlogPost } = useContext(Context)
  const submitBlogPost = () => {
    if (title === '' || content === '') {
      setMessage('PLEASE FILL THE FIELDS YA KHARA!')
    } else if (title.length < 5) {
      setMessage('TITLE SHOULD BE AT LEAST 5 CHARACTERS YA 7MAR!')
    } else if (content.length < 8) {
      setMessage('CONTENT SHOULD BE AT LEAST 8 CHARACTERS W2ER')
    } else {
      addBlogPost({ title, content })
      setTitle('')
      setContent('')
    }
  }

  return (
    <View className='p-2'>
      <Text className='text-2xl self-center'>Create a New Blogpost</Text>
      <Text className='text-lg'>Enter Title:</Text>
      <TextInput
        className='bg-white py-1 px-2 my-1 rounded-lg'
        value={title}
        placeholder='Title for the blogpost'
        onChangeText={setTitle}
      />
      <Text className='text-lg'>Enter Content:</Text>
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
        <Text className='text-white'>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  )
}
