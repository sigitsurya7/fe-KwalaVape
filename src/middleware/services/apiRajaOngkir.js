// api.js
import { useState, useEffect } from 'react'
import axios from 'axios'

const apiKey = '86a892cb2c632ded010751a49dede3b6'

export const getProvinceData = () => {
  const [provinceData, setProvinceData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/rajaongkir/starter/province', {
          headers: {
            'key': apiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        setProvinceData(response.data.rajaongkir.results)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return provinceData
}

export const getCityData = () => {
    const [cityData, setCityData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('/rajaongkir/starter/city', {
            headers: {
                'key': apiKey,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            })
            setCityData(response.data.rajaongkir.results)
        } catch (error) {
            console.log(error)
        }
        }

        fetchData()
    }, [])

    return cityData
}
