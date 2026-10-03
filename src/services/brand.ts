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

interface Brand {
  logo: string
  id: string
  name: string
  sneakers: Sneaker[]
}

interface AllBrandsResponse {
  data: Brand[]
  error: Error | null
  message: string
}

interface BrandResponse {
  data: Brand
  error: Error | null
  message: string
}

export async function getAllBrands(): Promise<AllBrandsResponse> {
  const response = await api.get("/brands")
  return response.data
}

export async function getBrandProducts(id: string): Promise<BrandResponse> {
  const response = await api.get(`/brands/${id}`)
  return response.data
}
