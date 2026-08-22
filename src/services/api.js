const API_URL = `${process.env.REACT_APP_API_URL}/api`;

const getToken = () => {
  return localStorage.getItem("token");
};

const apiRequest = async (url, options = {}) => {
  const token = getToken();

  const response = await fetch(`${API_URL}${url}`, {
    ...options,

    headers: {
      "Content-Type": "application/json",

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...(options.headers || {}),
    },
  });

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("Backend returned an invalid response");
  }

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const getConversations = async () => {
  return apiRequest("/conversations");
};

export const createConversation = async (title) => {
  return apiRequest("/conversations", {
    method: "POST",

    body: JSON.stringify({
      title,
    }),
  });
};

export const deleteConversation = async (conversationId) => {
  return apiRequest(`/conversations/${conversationId}`, {
    method: "DELETE",
  });
};

export const updateConversation = async (conversationId, title) => {
  console.log("UPDATE CONVERSATION API CALLED");
  console.log("ID:", conversationId);
  console.log("TITLE:", title);
  console.log("API URL:", `${API_URL}/conversations/${conversationId}`);

  return apiRequest(`/conversations/${conversationId}`, {
    method: "PATCH",

    body: JSON.stringify({
      title,
    }),
  });
};

export const getMessages = async (conversationId) => {
  return apiRequest(`/messages/${conversationId}`);
};

export const sendAIMessage = async (conversationId, content) => {
  return apiRequest(`/ai/${conversationId}`, {
    method: "POST",

    body: JSON.stringify({
      content,
    }),
  });
};

export const regenerateAIMessage = async (conversationId) => {
  return apiRequest(`/ai/${conversationId}/regenerate`, {
    method: "POST",
  });
};

export const uploadFile = async (conversationId, file) => {
  const token = getToken();

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/files/${conversationId}`, {
    method: "POST",

    headers: {
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },

    body: formData,
  });

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("Backend returned an invalid response");
  }

  if (!response.ok) {
    throw new Error(data.message || "File upload failed");
  }

  return data;
};

export const changePassword = async (
  currentPassword,
  newPassword,
  confirmPassword,
) => {
  return apiRequest("/auth/change-password", {
    method: "POST",

    body: JSON.stringify({
      currentPassword,
      newPassword,
      confirmPassword,
    }),
  });
};

export const deleteAccount = async () => {
  return apiRequest("/auth/delete-account", {
    method: "DELETE",
  });
};
