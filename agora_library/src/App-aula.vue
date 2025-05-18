<template>
  <div>
    <FirstComponent />
    <life-cycle />
    <people />
    <Form />
  </div>

</template>

<script>
  import FirstComponent from './components/aula/FirstComponent.vue'
  import Form from './components/aula/Form.vue';
  import LifeCycle from './components/aula/LifeCycle.vue'
  import People from './components/aula/People.vue'

  export default {
    name: 'App',
    components: {
      FirstComponent,
      LifeCycle,
      People,
      Form
    }
  }
</script>

<style>
  body {
    background: #000;
    color: #fff;
  }
  a {
    color: red;
  }
</style>