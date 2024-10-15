import fetch from 'node-fetch';

const API_KEY = 'YOUR_API_KEY_HERE'; // Reemplaza esto con tu clave de API real
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY;

export async function getTopNews() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.articles.slice(0, 6); // Devuelve los primeros 6 artículos
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}