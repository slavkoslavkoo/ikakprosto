import { defineStore } from 'pinia'

export type Post = {
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

const initialState: Post[] = []

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: initialState,
  }),
  actions: {
    async fetchPosts() {
      const response = await fetch('https://dummyjson.com/posts?limit=5')
      const result = await response.json()
      this.posts = result.posts
    },
    addLikePost(postId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        post.reactions.likes++
      }
    },
    removeLikePost(postId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        post.reactions.likes = post.reactions.likes - 1
      }
    },
    addDislikePost(postId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        post.reactions.dislikes++
      }
    },
    removeDislikePost(postId: number) {
      const post = this.posts.find(p => p.id === postId)
      if (post) {
        post.reactions.dislikes = post.reactions.dislikes - 1
      }
    },
  },
})
