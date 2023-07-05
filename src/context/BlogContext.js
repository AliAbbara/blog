import createDataContext from './createDataContext'
const threeBlogs = [
  {
    title: 'Going once',
    content: 'This is an example of a blogPost is useless.',
    id: 10826479,
  },
  {
    title: 'Going twice',
    content: 'This is another example of a useless blogPost.',
    id: 98723631,
  },
  {
    title: 'SOLD',
    content: 'This is a third example of a completely useless blogPost.',
    id: 45478905,
  },
]

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 96984999),
          ...action.payload,
        },
      ]
    case 'edit':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })

    case 'delete':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (blogPost) => {
    dispatch({ type: 'add', payload: blogPost })
  }
}

const editBlogPost = (dispatch) => {
  return (blogPost) => {
    dispatch({ type: 'edit', payload: blogPost })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  threeBlogs
)
