export class NetworkError extends Error {
  constructor(public error: Error, message?: string) {
    super(message)
  }
}

export type HttpErrorEntity = {
  name: string
  message: string
  stack?: string
}
export class HttpError extends Error {
  url: string
  status: number
  statusText: string
  constructor(response: Response) {
    super(response.statusText)
    this.name = 'HttpError'
    this.status = response.status
    this.statusText = response.statusText
    this.url = response.url
  }
  serialize(): HttpErrorEntity {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    }
  }
}
