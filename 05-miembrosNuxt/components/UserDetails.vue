<template>
    <div class="list-user-container" >
            <img :src="item.avatar_url" /> 
            <h2>Hello from Detail page</h2>
            <h3>User {{ item.login }} </h3>
            <p> id: {{ item.id }}</p>
            <p> login: {{ item.login }}</p>
            <p> company: {{ item.company }}</p>
            <p> bio: {{ item.bio }}</p> 
            <NuxtLink to="/member">Back to list page</NuxtLink> 
    </div>
</template>

<script setup lang="ts">
    defineProps({
        item: {
            type: Object,
            required: true
        }
    })

</script>

<style>

</style>