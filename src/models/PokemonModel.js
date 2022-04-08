export default class PokemonModel {
    constructor(response){
        this.id = response.id;
        this.name = response.name;
        this.stats = this.setStats(response.stats);
        this.types = this.setTypes(response.types);
        this.height = this.setWeight(response.weight);
        this.weight = this.setHeight(response.height);
        this.artwork = this.setArtworkUrl(response.sprites.other);
        this.abilities = this.setAbilities(response.abilities);
    }

    setWeight(weight){
        return weight / 10; //set to KG
    }

    setHeight(height){
        return height / 10; //set to M
    }

    setArtworkUrl(sprites){
        return sprites['official-artwork']['front_default'];
    }

    setAbilities(abilities){
        return abilities.map(ability => {
            return ability.ability.name;
        })
    }

    setTypes(types){
        return types.map(type => {
            return type.type.name;
        })
    }

    setStats(stats){
        return stats.map(stat => {
            return {
                "name": stat.stat.name,
                "value": stat.base_stat
            }
        })
    }
}