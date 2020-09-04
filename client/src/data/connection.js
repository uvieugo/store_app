import axios from 'axios'
let token

const instance = axios.create({
  // baseURL: 'http://localhost:3000/api/v1'
});

export const setToken = (auth_token) => {
  if (localStorage.getItem('auth_token') === null) { localStorage.setItem('auth_token', auth_token) }
  if (token === undefined){token = auth_token || localStorage.getItem('auth_token')}
}

export const getMenuClasses = () => {
  setToken()
  return instance.get('/api/v1/menu_classes',{
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
}

export const getMenuTypes = () =>{
  setToken()
  return instance.get('/api/v1/menu_types',{
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
}

export const getMenuItems = () => {
  setToken()
  return instance.get('/api/v1/menu_items',{
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
}

export const getCondiments = () => {
  setToken()
  return instance.get('/api/v1/condiments',{
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
}

export const addMenuClass = (data) => {
  setToken()
  let postData = {name: data}
  return instance.post('/api/v1/menu_classes', {
    headers: {
      "Authorization": `Bearer ${token}`
    },
    menu_class: postData
  })
}

export const addMenuItem = (data) => {
  setToken()
  // let postData = {data}
  instance.defaults.headers.common['Authorization'] = token;
  return instance.post('/api/v1/menu_items',{
    menu_item: data,
  })
}

export const addCondiment = (data) => {
  setToken()
  // let postData = {data}
  instance.defaults.headers.common['Authorization'] = token;
  return instance.post('/api/v1/condiments',{
    condiment: data,
  })
}

export const createSession = (data) => {
  return instance.post('/api/v1/sessions',{
    email: data.email,
    password: data.password
  });
}

export const handleError = (error) => {
  if (error.response) {
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    return (error.response.data.error)
  } else if (error.request) {
    // console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
  // console.log(error.config);
}

export const updateCondiment = (data) => {
  setToken()
  instance.defaults.headers.common['Authorization'] = token;
  return instance.patch(`/api/v1/condiments/${data.id}`, {
    name: data.name,
    price: data.price,
    object_num: data.object_num
  })
}

export const updateMenuItem = (data) => {
  setToken()
  instance.defaults.headers.common['Authorization'] = token;
  return instance.patch(`/api/v1/menu_items/${data.id}`, {
    menu_item: {name: data.name,
    price: data.price,
    object_num: data.object_num,
    menu_class: data.menu_class}
  })
}

export const addMenuOption = (data) => {
  setToken()
  instance.defaults.headers.common['Authorization'] = token;
  return instance.post('/api/v1/menu_options', {
    menu_option: {
      menu_item_id: data.menu_item_id,
      condiment_id: data.condiment_id
  }
  })
}

export const addOrder = (data) => {
  let orderDetails = {...data}
  delete orderDetails.status
  delete orderDetails.orderNum
  return instance.post("/api/v1/orders", {
    order: {
      details: orderDetails,
      status: data.status,
      order_num: data.orderNum
    }
  }
  )
}

export const verifyTransaction = (reference) => {
  return instance.get("/api/v1/verify", {
    params: {
      trxref: reference
    }
  })
}