// Fetching data from api 

import { ShuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    try {
        const response = await fetch(endPoint);

        if (!response.ok) {
            throw new Error(`Failed to fetch questions. Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.results) {
            throw new Error(`Unexpected data format: ${JSON.stringify(data)}`);
        }

        return data.results.map((question: Question) => ({
            ...question,
            answers: ShuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ]),
        }));
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error; // Rethrow the error to indicate that the fetch failed
    }
};
