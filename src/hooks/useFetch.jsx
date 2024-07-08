import axios from '../api'
import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataLoad = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url)
        setData(response.data);
      }
      catch (error) {
        setErrors(error);
        setLoading(false)
      }
      finally {
        setLoading(false);
      }
    }
    dataLoad();
  }, [url])


  return {data, errors, loading};
}