import type { Items } from '@/types'

export const useUserApi = () => {
    const getUsers = async (company: string) => {
        try {
            const users = await $fetch<Items[]>(`https://api.github.com/orgs/${company}/members`)
            return users
        } catch {
            return []
        }
    }

    const getUser = async (id: string) => {
        const user = await $fetch<Items[]>(`https://api.github.com/users/${id}`)
        return user
    }

    return { getUsers, getUser}     
}