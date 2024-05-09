import axios from 'axios'
import apiPathUrl from 'src/config/apiPathUrl'

const getProducts = async ($q) => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.getProducts}`
  const response = await axios.get(url)
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error + ' - Could not get data.'
      })
    })
  return response.data.data
}

export { getProducts }
