import axios from 'axios'
import 'react'

const instance=axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzhkMmFmM2JiYzljMDc5ZTQ4ZmQ4N2M4ODExMmUwYSIsIm5iZiI6MTcyMDcwNzAwNC4xODgsInN1YiI6IjY2OGZlN2JjNTk4OWNjMThhZmI2MzQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tu-_JgDx6ZzqBQf8iIv2BzISdCEiy0s52tw3LFNjdWk'
    }
  }
  ) 
export default instance