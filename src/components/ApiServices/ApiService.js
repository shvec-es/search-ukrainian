import axios from 'axios';

class ApiService {
  async postCard(object) {
    try {
      const req = await axios.post('http://localhost:8989/api/posts', object);
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(object) {
    try {
      const req = await axios.get('http://localhost:8989/api/posts', object);
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ApiService();
