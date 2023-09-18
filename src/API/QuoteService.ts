import axios from "axios"
import { QuoteData } from "../interfaces/Quote"

export default class QuoteService {
  static async fetchRandomQuote(): Promise<QuoteData> {
    try {
      const res = await axios<QuoteData[]>({
        method: 'get',
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY,
        },
        url: 'https://api.api-ninjas.com/v1/quotes',
      })
      return res.data[0]
    } catch (error) {
      return {} as QuoteData
    }
  }
}