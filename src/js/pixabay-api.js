import axios from "axios";
export const perPage = 15;
export async function getImagesByQuery(query, page) {
    const baseURL = 'https://pixabay.com';
    const endPoint = '/api/';
    const params = new URLSearchParams({
        key: '53346532-56e1a2cf6c50fcc4672e719cf',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: page 
    })
    const url = `${baseURL}${endPoint}?${params}`;    
    const response = await axios.get(url);
    return response.data;
}