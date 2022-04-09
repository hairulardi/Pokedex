import axios from 'axios';
import HttpCOnfig from './HttpConfig';
import PokemonModel from '@/models/PokemonModel';

const BASE_URL = HttpCOnfig.getBaseURL();

export default {
    getPokemonList(nextUrl = null){
        let url = nextUrl ? nextUrl : `${BASE_URL}/pokemon/?offset=0&limit=30`;

        return axios.get(url).then(response => {
            let data = response.data.results
            let total = response.data.count
            let next = response.data.next

            let promises = data.map(result => {
                return axios.get(result.url)
            })

            return Promise.all(promises).then(response => {
                let data = response.map(response => {
                    return new PokemonModel(response.data);
                })

                return {
                    total: total,
                    next: next,
                    data: data
                }
            })
        });
    },

    getPokemonByName(name){
        let url = `${BASE_URL}/pokemon/${name}`;

        return axios.get(url).then(response => {
            return new PokemonModel(response.data);
        });
    }
}