const API_KEY = '9d8e6fcd966d44a68862fde4ac7b7b26'; // Reemplaza esto con tu clave de API real
const API_URL = 'https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=' + API_KEY;
const SEARCH_API_URL = 'https://newsapi.org/v2/everything?apiKey=' + API_KEY;

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

export async function searchNews(searchTerm) {
  try {
    const response = await fetch(`${SEARCH_API_URL}&q=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(data.message || 'Failed to fetch search results');
    }
    
    return data.articles.slice(0, 9); // Return top 10 results
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
}