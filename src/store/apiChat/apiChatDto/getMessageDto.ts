
interface textMessageData{
    textMessage: string
}
interface extendedTextMessageData{
    text: string
}
interface messageData {
    textMessageData: textMessageData,
    extendedTextMessageData: extendedTextMessageData,
    typeMessage: string
}
interface senderData{
    chatId: string,
    chatName: string,
    sender: string,
    senderName: string
}
interface instanceData{
    idInstance: number,
    typeInstance: string,
    wid: string
}
interface body{
    chatId?: string,
    idMessage?: string,
    instanceData?: instanceData,
    sendByApi: boolean,
    senderData: senderData,
    messageData: messageData,
    timestamp: number,
    typeWebHook: string,
    status?: string
}
export interface getMessage{
    receiptId: number,
    body: body
}