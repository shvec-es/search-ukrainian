import axios from 'axios';

class ApiService {
  async postCard(object, file) {
    try{
      const fd = new FormData();
      fd.append('name' , object.name)
      fd.append('surname' , object.surname)
      fd.append('midname' , object.midname)
      fd.append('city' , object.city)
      fd.append('region' , object.region)
      fd.append('birth_year' , object.birth_year)
      fd.append('description' , object.description)
      fd.append('picture', file)
      const req = await axios.post('http://localhost:8989/api/posts', fd, {
          headers: {
            'Content-Type': ' multipart/form-data'
          }
      })
    }catch (e) {
      console.log(e)
    }
  }
  
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
