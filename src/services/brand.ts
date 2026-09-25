import api from "../utils/axios"

interface Brand {
  logo: string
  id: string
  name: string
}

interface AllBrandsResponse {
  data: Brand[]
  error: Error | null
  message: string
}

export async function getAllBrands(): Promise<AllBrandsResponse> {
  const response = await api.get("/brands")
  return response.data
}
