import { Food } from "@screens/Home";

export const findLongestInDietSequence = (data:Food[]) => {
        let maxSequence = 0;
        let currentSequence = 0;

        data.forEach(item => {
            if (item.isInDiet) {
                currentSequence++;
                maxSequence = Math.max(maxSequence, currentSequence);
            } else {
                currentSequence = 0;
            }
        });

        return maxSequence;
};