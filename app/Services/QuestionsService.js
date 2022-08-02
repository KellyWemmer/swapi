import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js"

class QuestionsService{    

    async getQuestions() {
        let res = await axios.get('https://opentdb.com/api.php?amount=10')

        console.log('get questions', res)//logged successful

        ProxyState.questions = res.data.results.map(q => new Question(q))
    }
}

export const questionsService = new QuestionsService()