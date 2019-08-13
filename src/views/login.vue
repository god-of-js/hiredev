 <template>
  <div>
    <div class="container-fluid" id="container">
      
      <b-form-group id="input-group-2" label="Email:" label-for="input-2">
        <b-form-input id= "input" v-model="email" placeholder="Email" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Password" label-for="input-group-3">
        <b-form-input id="input" v-model="password" placeholder= "Password" type= "password" name="password"
         required></b-form-input>
      </b-form-group>
   <div class="reg"> Not registered? <router-link to="register">Register</router-link></div>
   <b-button type="submit" id="btn" @click="login(event)">Login</b-button>
   
    
    </div>
  </div>
</template>
<style scoped>
#container{
  width: 500px;
  padding-top: 150px;
  margin-right: 60%;
}
#input:active{
  width: 550px;
}
#btn{
  width: 470px;
  background-color: yellowgreen;
}
#btn:hover{
  width: 550px;
}

.reg{
  padding-bottom: 5px;
}
</style>
<script>
import {  auth } from '../db'
export default {
  props: ['id'],    
  data(){
    return {
      email: "",
      password: "", 
    }
  },
  methods: {
   login() {
    //  event.preventDefault()
        auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
          this.$router.push('/home')
        })
      }
  }
  }
</script>