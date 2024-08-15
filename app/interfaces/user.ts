export default interface User {
    id: number,
    email: String | null,
    name: String | null,
    display_name: String | null,
    password: String | null,
    banned: Boolean | null,
}