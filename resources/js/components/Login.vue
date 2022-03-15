<template>
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-header"><h4>Iniciar sesión</h4></div>
                <div class="card-body">
                    <form @submit.prevent="loginProcess">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Ingresa el númeto de teléfono</label>
                                    <input type="text" required class="form-control" v-model="login.mobilephone">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Iniciar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"login-user",
    data(){
        return {
            login:{
                mobilephone:"",
            }
        }
    },
    methods:{
        async loginProcess(){
            await this.axios.post(this.$api_login_url,this.login).then(response=>{
                localStorage.customer = JSON.stringify(response.data.customer)
                localStorage.categories = JSON.stringify(response.data.categories)
                this.$router.push({name:"mostrarCatalogos"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>