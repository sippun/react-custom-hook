// useApi.js
import { useEffect, useState } from "react"

const useApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    //fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
    .then(response => {
      return response.json() //extract JSON from HTTP response
    })
    .then(json => {
      console.log(json)
      setLoading(false)
      setData(json)
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default useApi;
