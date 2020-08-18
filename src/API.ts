// export const api = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple';

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=11`;
    const data = await (await (await fetch(endpoint)).json());
    console.log(data);
}