import axios from 'axios';
import HttpCOnfig from './HttpConfig';
import PokemonModel from '@/models/PokemonModel';

const BASE_URL = HttpCOnfig.getBaseURL();

export default {
    getPokemonList(){
        let url = BASE_URL + '/pokemon/';

        return axios.get(url).then((response) => {
            // console.log(response.data)

            // return new PokemonModel(response.data)
        });
    },

    getPokemonById(id){
        let url = BASE_URL + '/pokemon/' + id;

        // return HttpRequest.getRequest(url).then((response) => {
        //     return new PokemonModel(response.data);
        // });

        return axios.get(url).then((response) => {
            // console.log(response.data)
            return new PokemonModel(response.data)
        });
    }
}