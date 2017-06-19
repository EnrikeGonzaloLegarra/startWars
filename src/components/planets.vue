<template>
  <div class="Planets">
    <h1>PLANETS COMPONENTS</h1>
    <div class="card">

      <ul class="list-group">
        <li v-for="(planet, $index) in planets" class="list-group-item">
          <div class="row">
            <div class="col-sm-6">
            <div class="card" style="width: 20rem;">
              <div class="card-block">
                <h4 class="card-title">{{ planet.name }}</h4>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Rotation: </strong> {{planet.rotation}}</span></li>
                <li class="list-group-item"><strong>Orbital: </strong> {{planet.orbital}}</span></li>
                <li class="list-group-item"><strong>Diameter: </strong> {{planet.diameter}}</span></li>
                <li class="list-group-item"><strong>Climate: </strong> {{planet.climate}}</span></li>
                <li class="list-group-item"><strong>Gravity: </strong> {{planet.gravity}}</span></li>
                <li class="list-group-item"><strong>Terrain: </strong> {{planet.terrain}}</span></li>
                <li class="list-group-item"><strong>Surface: </strong>{{planet.surface}}</span></li>
                <li class="list-group-item"><strong>Population:</strong> {{planet.population}}</span></li>
              </ul>
              <div class="card-block">
                <a href="#" class="card-link">{{ planet.name }}</a>
              </div>
            </div>
            </div>
          </div>

        </li>
      </ul>

    </div>


  </div>
</template>

<script>
export default {
  name: 'planets',
  data () {
    return {
     planets: []
    }
  }, mounted(){
      this.$http.get('http://swapi.co/api/planets/')
        .then(response => {
            if(response.status === 200){
                this.planets = response.data.results.map(planets => {
                    return{
                        name: planets.name,
                        rotation: planets.rotation_period,
                        orbital: planets.orbital_period,
                        diameter: planets.diameter,
                        climate: planets.climate,
                        gravity: planets.gravity,
                        terrain: planets.terrain,
                        surface: planets.surface_water,
                        population: planets.population,
                        next: planets.next
                        }
                })
            }
        })
        .catch(error => {
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
.card{
  width:300px;

}
</style>
