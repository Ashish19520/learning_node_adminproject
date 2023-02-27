export const signUp = async (name,email,password) => {
  try {
    const fetchResponse = await fetch("http://localhost:5000/register",{
      method: "POST",
      headers: {
        // "access-token": store.getState().authentication.user.newToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password
      }),
    });
    return  await fetchResponse.json();
  } catch (error) {
    return error;
  }
};

export const login = async (email, password) => {
  try {
    const fetchResponse = await fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        // "access-token": store.getState().authentication.user.newToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return await fetchResponse.json();
  } catch (error) {
    return error;
  }
};

export const addingproduct = async (name,price,category,company) => {
  try {
    const fetchResponse = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: {
        // "access-token": store.getState().authentication.user.newToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,price,category,company
      }),
    });
    return await fetchResponse.json();
  } catch (error) {
    return error;
  }
};
export const updateproduct = async (name,price,category,company,_id) => {
  try {
    
    const fetchResponse = await fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        // "access-token": store.getState().authentication.user.newToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,price,category,company
      }),
    });
    return await fetchResponse.json();
  } catch (error) {
    return error;
  }
};
export const getProducts = async () => {
  try {
    const fetchResponse = await fetch('http://localhost:5000/products',{
      method: "POST",
      headers: {
        // "access-token": store.getState().authentication.user.newToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await fetchResponse.json();
  } catch (error) {
    return error;
  }
};
