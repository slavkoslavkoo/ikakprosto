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

export type User = {
  id: number
  username: string
  fullName: string
}

export type Comment = {
  id: number
  body: string
  postId: number
  likes: number
  user: User
}
