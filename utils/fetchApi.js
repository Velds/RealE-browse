import axios from "axios";

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '6ed99c693cmshcf1200feef9bb47p12e26djsnc5d586b5b736'
// }

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6ed99c693cmshcf1200feef9bb47p12e26djsnc5d586b5b736'
        }     
    })

    return data; 
}