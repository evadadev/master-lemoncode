<template>
    <div v-if="showTable">
        <div class="list-header">
            <span>Avatar</span>
            <span>Id</span>
            <span>Nombre</span>
        </div>

        <div class="list-user-container" v-for="item in items">
            <img :src="item.avatar_url" />
            <span>{{ item.id }}</span>
            <span><NuxtLink :to="`/member/${item.login}`">{{ item.login }}</NuxtLink></span>
        </div>
    </div>
    <div v-else>No se encontraron resultados</div>
</template>

<script setup lang="ts">
    import type { User, Items } from "@/types";
    import { useUsersStore } from "@/stores/useUsersStore";
    
    const showTable = computed(() => items.value.length)

    const items = computed(() => {
        const {usersList} = useUsersStore();

        return usersList.map((user: Items): User => {
            return {
                login: user.login,
                id: user.id,
                avatar_url: user.avatar_url
            }
        })
        
    })
    
</script>

<style scoped>
.list-header {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;
    background-color: #2f4858;
    color: white;
    font-weight: bold;
    height: 30px;
    padding: 10px;
}

.list-user-container {
    display: grid;
    grid-template-columns: 80px 1fr 3fr;
    grid-auto-rows: 80px;
    grid-gap: 10px;
}

.list-user-container > img {
    width: 80px;
    border-radius: 50%;
}
</style>