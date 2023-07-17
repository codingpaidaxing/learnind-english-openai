import { Configuration, OpenAIApi } from 'openai'

export class OpenAIController{
    constructor(ctx){
        this.ctx = ctx;
        const config = new Configuration({
            apiKey: "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"
        });
    
        this.openai = new OpenAIApi(config);
    }
    async generateImg(){
        const {prompt} = this.ctx.request.body;
        const {data} = await this.openai.createImage({
            prompt: prompt,
            n: 1,
            size: "256x256",
     });

        console.log(data.data);

        const imageUrl = data.data[0].url

        this.ctx.body = {
            state: "ok",
            data: imageUrl
        }
    }
}