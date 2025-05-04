export interface Iuser {
    id: number,
    title: string,
    created_at: string,
    method: string,
    rating: number
}

export interface ILogin {
    email: string|null,
    password: string|null
}