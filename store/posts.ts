import { defineStore } from 'pinia'

type Post = {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the first post content.',
        likes: 0,
        dislikes: 0,
        comments: [
          { id: 1, text: 'Great post!', removed: false },
          { id: 2, text: 'I disagree.', removed: false },
        ],
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'This is the second post content.',
        likes: 0,
        dislikes: 0,
        comments: [
          { id: 1, text: 'Interesting view!', removed: false },
          { id: 2, text: 'Needs more detail.', removed: false },
        ],
      },
    ],
  }),
  actions: {
    likePost(postId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        post.likes++
      }
    },
    dislikePost(postId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        post.dislikes++
      }
    },
    removeComment(postId: number, commentId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        const comment = post.comments.find(c => c.id === commentId)
        if (comment) {
          comment.removed = true
        }
      }
    },
  },
})
