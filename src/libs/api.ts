import { Domain, Environment } from '@/features'
import { HttpError } from '@/features/domain/error'

export async function getApi<T>(endpoint: string): Promise<T> {
  const apiUrl = `${Environment.apiEndpoint}${endpoint}`

  const headers = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json'
  }

  return await jsonWrapper<T>(
    fetch(apiUrl, {
      headers,
      method: 'GET'
    })
  )
}

export const toApiError = (response: Response) => {
  return response
    .json()
    .then(() => {
      return new HttpError(response)
    })
    .catch((error) => {
      return new HttpError(error)
    })
}

export const jsonWrapper = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              // Note: jsonが取得できた場合だけresolve
              resolve(json)
            })
            .catch((error) => {
              reject(error)
            })
        } else {
          toApiError(response).then((error) => {
            reject(error)
          })
        }
      })
      .catch((error) => {
        reject(new Domain.Error.NetworkError(error, 'ネットワークエラー'))
      })
  })
}
