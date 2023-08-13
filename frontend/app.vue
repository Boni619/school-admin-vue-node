<template>
  <div>
    {{ loginUser.user.name }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const url = config.public.baseUrl+'/auth/login';
const userLoginData = {
  email: 'john2@gmail.com',
  password: 'password1',
};

const { data: loginUser } = await useFetch(url,{ method:'post',body: userLoginData})
console.log(loginUser);
</script>
