// Function to randomise answer to questions
export const ShuffleArray = (array: any[]) => {
    [...array].sort(() => Math.random() - 0.5);
};