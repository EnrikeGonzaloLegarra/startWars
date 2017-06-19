<template>
  <div class="characters">
    <h1>CHARACTERS COMPONENTS</h1>
    <div class="card">

      <ul class="list-group">
        <li v-for="(specie, $index) in species" class="list-group-item">
          <div class="row">
            <div class="col-xs-8">
              <h3>{{ specie.name }}</h3> CLASIFICATION: {{specie.classification}}<br>
              <br>
              <span>DESIGNATION: {{specie.designation}}</span><br>
              <span>AVERAGE: {{specie.average}}</span>
              <span>SKIN: {{specie.skin}}</span><br>
              <span>HAIR:{{specie.hair}}</span><br>
              <span> EYE: {{specie.eye}}</span><br>
              <span>LANGUAGE: {{specie.language}}</span>

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
      species: []
    }
  },
   mounted(){
      this.$http.get('http://swapi.co/api/species/')
        .then(response => {
            if(response.status === 200){
                this.species = response.data.results.map(species => {
                    return{
                      name: species.name,
                      classification: species.classification,
                      designation: species.designation,
                      average: species.average_height,
                      skin: species.skin_colors,
                      hair: species.hair_colors,
                      eye: species.eye_colors,
                      averageLifespan: species.average_lifespan,
                      homeworld: species.homeworld,
                      language: species.language
                    }
                })
            }
        }).cath(error => {
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
