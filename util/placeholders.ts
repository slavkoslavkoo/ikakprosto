import type { Post } from '~/store/posts'

export const placeholderPost: Post = {
  id: 239048,
  title: 'Example Title',
  body: 'This is a placeholder body for the post. It provides a preview of what the actual post content might look like.',
  tags: ['placeholder', 'example', 'sample'],
  reactions: {
    likes: 100,
    dislikes: 10,
  },
  views: 250,
  userId: 1,
}
