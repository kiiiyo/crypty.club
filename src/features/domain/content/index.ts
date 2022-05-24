export type Image = {
  height: number
  width: number
  url: string
}

export type OGP = {
  fieldId: 'ogp'
  title: string
  description?: string
  image: Image
}

export type Entity = {
  id: string
  ogp: OGP
  createdAt: string
  publishedAt: string
  updatedAt: string
  revisedAt: string
}
