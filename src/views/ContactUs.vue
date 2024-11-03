<script setup lang="ts">
import Contact from '@/components/ContactUs/Contact.vue'
import Form from '@/components/ContactUs/Form.vue'
import Heading from '@/components/ContactUs/Heading.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <Heading></Heading>
    <Contact></Contact>
    <Form></Form>
  </MainLayout>
</template>
