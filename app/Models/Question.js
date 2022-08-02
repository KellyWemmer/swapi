

export class Question {
    constructor({difficulty, question}) {
        this.difficulty = difficulty,
        this.question = question
    }

    get Template(){
        return `
        <div class="card bg-dark mb-3 elevation-2 p-3 text-white">          
            <h4>${this.question}</h4>
            
        </div>
        `
    }

}