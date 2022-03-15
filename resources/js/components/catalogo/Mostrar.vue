<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <span class="text-right">Hola {{customer.name}} <a type="button" @click="salir()" class="text-danger"><i class="fas fa-power-off"></i></a></span>
        </div>
        <div v-for="(section, i) in sections" class="col-md-4">
            <div >
                <div class="card" style="width: 18rem;">
                    <img v-bind:src="api_url + section.image"  class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{section.name}}</h5>
                        <div :id="'carousel' + i" class="carousel slide carousel-dark" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item" :class="{ 'active': index === 0 }" v-for="(product, index) in section.products">
                                <img v-bind:src="api_url + product.image.url" class="d-block w-100" alt="">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>{{product.name}}</h5>
                                    <p>$ {{product.price}}</p>
                                  </div>
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel'+i" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" :data-bs-target="'#carousel'+i" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>

export default {
    name:"categorias",
    data(){
        return {
            customer:JSON.parse(localStorage.customer),
            sections: [],
            product:"",
            api_url:this.$api_url,
            products:[]
        }
    },
    mounted(){
        this.getSections()
    },
    methods:{
        async getSections(){
            await this.axios.get(this.$api_sections_url).then(response=>{
                this.sections = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        salir()
        {
            localStorage.removeItem('customer')
            localStorage.removeItem('categories')
            this.$router.push({name:"login"})
        }
    }
}
</script>