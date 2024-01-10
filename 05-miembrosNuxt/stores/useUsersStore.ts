import type { Items } from '@/types'
import { useUserApi } from '@/composables/useUserApi'

const { getUsers } = useUserApi()

export const useUsersStore = defineStore('users', () => {
    const users = ref<Items[]>([]) 

    const usersList = computed(() => users.value)

    const setUsers = async (company: string) => {
        const items = await getUsers(company)
        users.value = items
    }
    return { usersList, setUsers }
})