const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://deploybackend-production-1494.up.railway.app';

export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}`);
    const result = await response.json();
    resolve({ result });
  });
}
