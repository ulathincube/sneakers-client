import api from "../utils/axios"

interface Picture {
  id: string
  url: string
}

interface Sneaker {
  id: string
  name: string
  size: number
  quantity: number
  price: number
  inStock: boolean
  pictures: Picture[]
}

interface AllSneakersResponse {
  data: Sneaker[]
  error: Error | null
  message: string
}

export async function getAllSneakers(): Promise<AllSneakersResponse> {
  const response = await api.get("/sneakers")
  return response.data
}
