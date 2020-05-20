import axios from 'axios';

export default class RestService {
  #endpointUrl;

  constructor(endpoint) {
    this.#endpointUrl = `${process.env.VUE_APP_BASE_API_URL}/${endpoint}`;
  }

  async getAll() {
    const response = await axios.get(this.#endpointUrl);
    return response.data;
  }
}
