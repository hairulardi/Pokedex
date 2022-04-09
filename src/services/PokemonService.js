import axios from 'axios';
import HttpCOnfig from './HttpConfig';
import PokemonModel from '@/models/PokemonModel';

const BASE_URL = HttpCOnfig.getBaseURL();

export default {
    getPokemonList(){
        let url = `${BASE_URL}/pokemon/?offset=0&limit=50`;

        return axios.get(url).then(response => {
            let data = response.data.results

            let promises = data.map(result => {
                return axios.get(result.url)
            })

            return Promise.all(promises).then(response => {
                return response.map(response => {
                    return new PokemonModel(response.data);
                })
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