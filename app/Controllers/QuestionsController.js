import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import {Pop} from "../Utils/Pop.js"


function _drawQuestions() {
    let template = ''

    ProxyState.questions.forEach(q => template += q.Template)

    document.getElementById('questions').innerHTML = `
    <div>
      ${template}
    </div>
  `
    
}

export class QuestionsController {
    constructor() {
        console.log('testing'); //successful

        ProxyState.on('questions', _drawQuestions)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()         
            
        } catch (error) {
            console.error('[Getting Questions, error]')
            Pop.error(error)
            
        }
    }
}