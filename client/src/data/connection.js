import axios from 'axios'
let token

const instance = axios.create({
  baseURL: '/api/v1'
});

export const setToken = (auth_token) => {
  if (localStorage.getItem('auth_token') === null) { localStorage.setItem('auth_token', auth_token) }
  if (token === undefined){token = auth_token || localStorage.getItem('auth_token')}
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getMenuClasses = () => {
  return instance.get('/menu_classes')
}

export const getMenuTypes = () =>{
  return instance.get('/menu_types')
}

export const getMenuItems = () => {
  return instance.get('/menu_items')
}

export const getCondiments = () => {
  return instance.get('/condiments')
}

export const addMenuClass = (data) => {
  setToken()
  let postData = {name: data}
  return instance.post('/menu_classes', {
    menu_class: postData
  })
}

export const addMenuItem = (data) => {
  setToken()
  // let postData = {data}
  return instance.post('/menu_items',{
    menu_item: data,
  })
}

export const addCondiment = (data) => {
  setToken()
  // let postData = {data}
  return instance.post('/condiments',{
    condiment: data,
  })
}

export const createSession = (data) => {
  return instance.post('/sessions',{
    email: data.email,
    password: data.password
  });
}

export const handleError = (error) => {
  if (error.response) {
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    return (error.response.data)
  } else if (error.request) {
    // console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
  // console.log(error.config);
}

export const updateCondiment = (data) => {
  setToken();
  return instance.patch(`/condiments/${data.id}`, {
    name: data.name,
    price: data.price,
    object_num: data.object_num
  })
}

export const updateMenuItem = (data) => {
  setToken()
  return instance.patch(`/menu_items/${data.id}`, {
    menu_item: {name: data.name,
    price: data.price,
    object_num: data.object_num,
    menu_class: data.menu_class}
  })
}

export const addMenuOption = (data) => {
  setToken()
  return instance.post('/menu_options', {
    menu_option: {
      menu_item_id: data.menu_item_id,
      condiment_id: data.condiment_id
  }
  })
}

export const removeMenuOption = (data) => {
  setToken()
  return instance.delete(`/menu_options/${data}`)
}

export const addOrder = (data) => {
  let orderDetails = {...data}
  delete orderDetails.status
  delete orderDetails.orderNum
  return instance.post("/orders", {
    order: {
      details: orderDetails,
      status: data.status,
      order_num: data.orderNum,
      order_type: data.order_type    
    }
  }
  )
}

export const verifyTransaction = (reference) => {
  return instance.get("/verify", {
    params: {
      trxref: reference
    }
  })
}