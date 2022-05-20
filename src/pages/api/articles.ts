import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { microcmsClient } from '@/libs/microcms'

export const getHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const {
    query: { limit, offset }
  } = request

  const statusCode = 200
  const queryLimit = typeof limit === 'string' ? Number(limit) : undefined
  const queryOffset = typeof offset === 'string' ? Number(offset) : undefined

  const responseArticles = await microcmsClient
    .getList({
      endpoint: 'articles',
      queries: {
        limit: queryLimit,
        offset: queryOffset
      }
    })
    .catch((error) => {
      console.log(error)
      return { error: { httpStatus: 500, message: 'Server Error' } }
    })

  response.status(statusCode).json(responseArticles)
}

export const handler: NextApiHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const method = request.method
  switch (method) {
    case 'GET':
      getHandler(request, response)
      break
    default:
      response
        .status(405)
        .json({ error: { httpStatus: 405, message: 'Method Not Allowed' } })
  }
}

export default handler
