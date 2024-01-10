<template>
        <div class="header">
            <label :aria-label="company">Compañía  </label>
            <input type="text" v-model="company" />
            <button type="button" @click="handleClick">Buscar</button>
        </div>
</template>

<script setup lang="ts">
    import { useUsersStore } from '@/stores/useUsersStore'
    const { setUsers } = useUsersStore()

    const company = ref("Lemoncode")

    const handleClick = async () => {
        await setUsers(company.value)
    }
    
    onMounted(() => {
        setUsers(company.value)
    })
    
</script>