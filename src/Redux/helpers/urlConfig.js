const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://elimart-server.vercel.app'
export const API = `${baseURL}/api`
