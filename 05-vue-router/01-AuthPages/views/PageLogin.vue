<template>
  <div class="page-auth">
    <UiContainer>
      <h2 class="title page-auth__title">Вход</h2>
      <form class="form" @submit.prevent="handleSubmit">
        <UiFormGroup label="Email">
          <div class="input-group">
            <input name="email" type="email" placeholder="demo@email" class="form-control" />
          </div>
        </UiFormGroup>
        <UiFormGroup label="Пароль">
          <div class="input-group">
            <input name="password" type="password" placeholder="password" class="form-control" />
          </div>
        </UiFormGroup>
        <div class="form__buttons">
          <button type="submit" class="button button_primary button_block">Войти</button>
        </div>
        <div class="form__append">Нет аккаунта? <router-link to="/register" class="link">Зарегистрируйтесь</router-link></div>
      </form>
    </UiContainer>
  </div>
</template>

<script>
import UiFormGroup from '../components/UiFormGroup.vue';
import UiContainer from '../components/UiContainer.vue';

export default {
  name: 'PageLogin',

  components: {
    UiFormGroup,
    UiContainer,
},

  methods: {
    handleSubmit() {
      const redirectFrom = this.$route.query.from;
      if (redirectFrom) {
        this.$router.push({ path: redirectFrom });
      } else {
        this.$router.push({ name: 'home' }); 
      }
    },
  },
};
</script>

<style></style>
