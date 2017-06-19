<template>
  <div class="characters">
    <h1>CHARACTERS COMPONENTS</h1>
    <div class="card">

        <ul class="list-group">
          <li v-for="(character, $index) in characters" class="list-group-item">
            <div class="row">
              <div class="col-xs-8">
                <h3>{{ character.name }}</h3> Gender: {{character.gender}}<br>
                <span>BIRTHADY YEAR: {{character.birth_year}} (BBY -> Before battle of yavin)</span><br>
                <span>DESCRIPTION</span><br>
                <span>HAIR COLOR: {{character.hair}} - EYE COLOR: {{character.eye}} - SKIN: {{character.skin}} </span>
                <div></div>
                <br>
                FILMS: <ul v-for="(film, $index) in character.films" class="lidt-group-item">
                <div class="row">
                  {{film}}
                </div>
              </ul>
                <br>
                SPECIES: <ul v-for="(specie, $index) in character.species" class="lidt-group-item">
                <div class="row">
                  {{specie}}
                </div>
              </ul>
                <br>
                VEHICLE: <ul v-for="(vehicle, $index) in character.vehicles" class="lidt-group-item">
                <div class="row">
                  {{vehicle}}
                </div>
              </ul>
                <br>
                STARSHIP: <ul v-for="(starship, $index) in character.starships" class="lidt-group-item">
                <div class="row">
                  {{starship}}
                </div>
              </ul>
              </div>
            </div>
          </li>
        </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      characters: []
    }
  },
  mounted(){
    this.$http.get('http://swapi.co/api/people')
        .then(response => {
            if(response.status === 200){
                this.characters = response.data.results.map(characters => {
                    return{
                      name: characters.name,
                      heigth: characters.heigth,
                      mass: characters.mass,
                      hair: characters.hair_color,
                      skin: characters.skin_color,
                      eye: characters.eye_color,
                      birth_year: characters.birth_year,
                      gender: characters.gender,
                      homeworld : characters.homeworld,
                      films: characters.films,
                      species: characters.species,
                      vehicles: characters.vehicles,
                      starships: characters.starships
                    }
                })
            }
        })
        .cath(error => {
          console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
