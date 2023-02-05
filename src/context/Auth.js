import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("users_bd")

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            )

            if (hasUser) setUser(hasUser[0])
        }
    }, [])

    const login = (email, password, nome) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"))

        const hasUser = usersStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem("user_token", JSON.stringify({ email, token, nome }))
                setUser({ email, password })
                return
            } else {
                return "E-mail ou senha incorretos"
            }
        } else {
            return "Usuario não existe"
        }
    }

    const cadastro = (email, password, nome) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"))

        const hasUser = usersStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            return "E-mail já está em uso"
        }

        let newUser

        if (usersStorage) {
            newUser = [...usersStorage, { email, password, nome }]
        } else {
            newUser = [{ email, password, nome }]
        }

        localStorage.setItem("users_bd", JSON.stringify(newUser))

        return
    }

    const sair = () => {
        setUser(null)
        localStorage.removeItem("user_token")
    }

    return (
        <AuthContext.Provider
            value={{ user, logado: !!user, login, cadastro, sair }}
        >
            {children}
        </AuthContext.Provider>
    ) 
}