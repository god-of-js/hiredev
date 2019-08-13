<template>
  <div>
    <div class="container-fluid" id="container">
    <b-form @submit="signup()" name="form">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="input" v-model="email" placeholder="Email" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Username:" label-for="input-2">
        <b-form-input id= "input" v-model="username" placeholder="Username" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Stack" label-for="input-group-3">
        <b-form-input id="input" v-model="stack" placeholder= "stack" type= "text" 
         required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Password" label-for="input-group-4">
        <b-form-input id="input" v-model="password" placeholder= "Password" type= "password" name="password"
         required></b-form-input>
      </b-form-group>
   <b-button id="btn" @click="signUp()">Register</b-button>
    </b-form>
    </div>
  </div>
</template>
 <style scoped>
 .upbuto{
   width: 220px;
 }
.upbut{
  width: 220px;
  margin-right: 20px;
}

#container{
  width: 500px;
  margin-top: 150px;
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
</style>
<script>
import { db, auth } from '../db'
export default {
  props: ['id'],
  data() {
    return {
      email: null,
      username: null,
      password: null,
      stack: null,

    }
  },
  methods: {
      signUp() {
        auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          const userId = data.user.uid;
           db.collection('users').add({
          name: this.username,
          stack: this.stack,
          userId: userId
        })
          alert(`Thanks ${this.username}, your account has been created successfully`);
          this.$router.push('/home') 
          },function(error){
            alert('oops something went wrong'); console.log(error)
          }
          )
      }
  },
}
</script>
