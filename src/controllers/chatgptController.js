import { ChatGPTAPI } from "chatgpt";

export class ChatGPTController {
    constructor(ctx){
        this.ctx = ctx;
        this.api = new ChatGPTAPI({
            apiKey: "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"
        })
    }

    async conversation(ctx){
        const { question } = this.ctx.request.body
        const answer = await this.api.sendMessage(question + "请使用中文进行回答");
        
        this.ctx.body={
            state: "ok",
            data: answer
        }
    }
}