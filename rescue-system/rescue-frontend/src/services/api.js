const BASE_URL = "http://localhost:8080/api";

// ================= REGISTER =================

export const registerUser = async (user) => {

  const response = await fetch(
    `${BASE_URL}/users/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    }
  );

  return response.json();
};

// ================= LOGIN =================

export const loginUser = async (user) => {

  const response = await fetch(
    `${BASE_URL}/users/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    }
  );

  return response.json();
};

// ================= ADD EMERGENCY =================

export const addEmergency = async (emergency) => {

  const response = await fetch(
    `${BASE_URL}/emergency/add`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(emergency),
    }
  );

  return response.json();
};

// ================= GET ALL =================

export const getEmergencies = async () => {

  const response = await fetch(
    `${BASE_URL}/emergency/all`
  );

  return response.json();
};

// ================= UPDATE =================

export const updateEmergency = async (
  id,
  status,
  assignedTo
) => {

  const response = await fetch(
    `${BASE_URL}/emergency/update/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status,
        assignedTo,
      }),
    }
  );

  return response.json();
};