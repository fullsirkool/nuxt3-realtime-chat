<template>
  <h1 class="text-cyan-700">{{ title }}</h1>
  <div class="flex">
    <label for="">Email:</label>
    <input
      type="email"
      v-model="userForm.email"
      class="border-solid border-2 border-indigo-600"
    />
  </div>
  <div class="flex">
    <label for="">Password:</label>
    <input
      type="password"
      v-model="userForm.password"
      class="border-solid border-2 border-indigo-600"
    />
  </div>
  <button @click="handleRegister">Submit</button>
  <div class="w-[500px]">
    <div class="">
      <GoogleButton @click="signInWithGoogle"></GoogleButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import GoogleButton from "../components/Common/GoogleButton.vue";
const { registerUser, authWithGoogle } = useFirebaseAuth();
const nuxtApp = useNuxtApp();
const title = ref("Event Page");
const userForm = reactive({
  email: "",
  password: "",
});
const handleRegister = async () => {
  try {
    console.log("registerUser before", userForm);
    const success = await registerUser(userForm.email, userForm.password);
    console.log("registerUser after", success);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // handle error
      console.log(error);
    }
  }
};
const signInWithGoogle = async () => {
  try {
    const res = await authWithGoogle();
    console.log("signInWithGoogle", res);
  } catch (error) {
    console.log(error);
  }
};
</script>
<style></style>
