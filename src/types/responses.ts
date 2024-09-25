export interface CatsFactRaw {
  status: CatsFactRawStatus
  _id: string
  user: string
  text: string
  __v: number
  source: string
  updatedAt: Date
  type: string
  createdAt: Date
  deleted: boolean
  used: boolean
}

export interface CatsFactRawStatus {
  verified: boolean
  sentCount: number
}
