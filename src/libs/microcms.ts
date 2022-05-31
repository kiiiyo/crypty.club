import { createClient, MicroCMSQueries } from 'microcms-js-sdk'
//
import { Domain } from '@/features'
import { HttpError } from '@/features/domain/error'

export const microcmsClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY || ''
})

export type GetListRequest = {
  endpoint: string
  queries?: MicroCMSQueries
}

export type GetDetailRequest = {
  endpoint: string
  contentId: string
  queries?: MicroCMSQueries
}

export const getList = async (request: GetListRequest) => {
  const { endpoint, queries } = request
  return await new Promise<Domain.Article.Collection>((resolve, reject) => {
    microcmsClient
      .getList({ endpoint, queries })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(new HttpError(error))
      })
  })
}

export const getDetail = async (request: GetDetailRequest) => {
  const { endpoint, contentId, queries } = request
  return await new Promise<Domain.Article.Entity>((resolve, reject) => {
    microcmsClient
      .get({ endpoint, contentId, queries })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(new HttpError(error))
      })
  })
}
