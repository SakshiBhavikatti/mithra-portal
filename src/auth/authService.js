export const authService = {
  async exchangeCodeForToken(code) {
    const res = await fetch("http://localhost:5000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    localStorage.setItem("access_token", data.access_token);
    return data;
  },

  getToken() {
    return localStorage.getItem("access_token");
  },

  logout() {
    localStorage.removeItem("access_token");
  },
};