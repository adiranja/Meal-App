

<template>
<div>
 <b-navbar type="dark" variant="dark">
    <b-navbar-brand style="font-family:Snell Roundhand, cursive; color:blue" >DELISH</b-navbar-brand>
     


  
      <b-navbar-nav >
        <b-nav-item   ><router-link to="/">Home</router-link></b-nav-item>
       
      </b-navbar-nav>

   
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchQuery" @keyup.enter="search()"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" @click="search()">Search</b-button>
        </b-nav-form>

      

       
      </b-navbar-nav>
  
  </b-navbar>
</div>
</template>

<script>
export default { 
    name: "Header",
    data(){
        return{searchQuery:""};
    },
    methods:{
        search(){
            this.$router.push({name:"searchMeal", 
            params: {
                query:this.searchQuery
            }
            });
            this.searchQuery=""
        }
    }
    };
</script>

