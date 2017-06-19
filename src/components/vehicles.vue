<template>
  <div class="characters">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      vehicles: []
    }
  }, mounted(){
      this.$http.get('http://swapi.co/api/vehicles/')
        .then(response => {
            if(response.status === 200){
                this.vehicles = response.data.results.map(vehicles => {
                    return {
                      name: vehicles.name,
                      model: vehicles.model,
                      manufacturer: vehicles.manufacturer,
                      cost: vehicles.cost_in_credits,
                      length: vehicles.length,
                      speed: vehicles.max_atmosphering_speed,
                      crew: vehicles.crew,
                      passengers: vehicles.passengers,
                      cargo: vehicles.cargo_capacity,
                      consumables: vehicles.cosumables,
                      vehicle_class: vehicles.vehicles_class
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
