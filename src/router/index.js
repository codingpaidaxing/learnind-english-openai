import Router from 'koa-router'

import { OpenAIController } from '../controllers/openaiController.js'
import { ChatGPTController } from '../controllers/chatgptController.js'


export const router = new Router()
router.post("/generate-img",async (ctx)=>{
    const openaiController = new OpenAIController(ctx);
    await openaiController.generateImg();
})

router.post("/conversation",async (ctx)=>{
    const chatgptController = new ChatGPTController(ctx);
    await chatgptController.conversation();
})
