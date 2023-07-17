import axios from 'axios'


export function apiGenerateImg(prompt: string) {
    return axios.post("/api/generate-img", {
        prompt,
    })
}


export function apiConversation(question: string) {
    return axios.post("/api/conversation", {
        question,
    })
}