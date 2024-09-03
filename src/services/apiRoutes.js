import axios from "axios";





const API_URL = "http://localhost:3000/api/";


export const registerNewUserCall = async (getUserData) => {

  const res = await axios.post(`${API_URL}users/register`, getUserData);

  return res;

};
export const registerNewAdminCall = async (getUserData) => {

  const res = await axios.post(`${API_URL}users/registerAdmin`, getUserData);

  return res;


};

export const loginCall = async (credentials) => {

  console.log(credentials);
  const res = await axios.post(`${API_URL}users/login`, credentials);

  console.log(res, "Login");
  return res;

};


export const bringProfile = async (token) => {
  const config ={
    headers: {
        Authorization: `Bearer ${token}`
    }
}


const res =  await axios.get(`${API_URL}users/profile`, config);
console.log(res, "profile");
return res
};

// get all users
export const bringAllUsersCall = async (token) => {
  const config ={
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
 
  
  const res =  await axios.get(`${API_URL}users/getall`, config);
  
  return res
}



export const updateProfile = async (data,token) => {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`, // Verifica que el token esté presente
    },
};

try {
    const response = await axios.put(`${API_URL}users/profile/update`, data, config);
    console.log('Profile updated:', response.data);
    return response.data;
} catch (error) {
    console.error('Error updating profile:', error.response?.data || error.message);
}
}


export const registerNewReservationCall = async (data) => {
  try {
      const response = await axios.post(`${API_URL}reservations/newReservation`, data);
      return response;
  } catch (error) {
      console.error('Error in registerNewReservationCall:', error.response ? error.response.data : error.message);
      throw error;
  }
};



export const bringAllReservations = async (token) => {
  const config ={
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
 
  
  const res =  await axios.get(`${API_URL}reservations/get`, config);
  
  return res
}

export const bringClientReservation = async (token) => {
  const config ={
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
 
  
  const res =  await axios.get(`${API_URL}reservations/myreservation/reservation`, config);
  
  return res
}


export const editReservationCall = async (data, token, id, ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const res = await axios.put(`${API_URL}reservations/${id}`, data, config)
  return res
}

export const deleteReservationCall = async ( id, token) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };

  const res = await axios.delete(`${API_URL}reservations/delete/${id}`,config);
  return res;
}


export const deleteUserCall = async ( id, token) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };

  const res = await axios.delete(`${API_URL}users/deleteUser/${id}`,config);
  return res.data;
}

// .get("url", headers(opcional))
// .post("url", body, headers)
// .put("url",body, headers)
// .delete("url",body, headers)