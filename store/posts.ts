import { defineStore } from 'pinia'
import type { Post } from '~/util/types'

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
    async findPost(id: number) {
      return this.posts.filter(p => p.id === id)
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
