 type MessageOut = {
    SENDER: 'sender',
    Recipient: 'recipient'
}
export interface WindowItemProps {
    sender?: MessageOut,
    message: string,
    time: string
}