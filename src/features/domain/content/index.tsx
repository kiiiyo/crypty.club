export type Image = {
  height: number
  width: number
  url: string
}

export type Entity = {
  image?: Image
  createdAt: string
  publishedAt: string
  updatedAt: string
  revisedAt: string
}
