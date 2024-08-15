export default interface Message {
    id: number,
    user_id: number,
    channel_id: number,
    message: number,
    date: Date,
    deleted: boolean
}