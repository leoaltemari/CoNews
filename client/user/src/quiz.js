new Vue({
    el: '#app',
    data: {
        answer: [],
        result: 0,

        displayQuest: true,
    },
    mounted() {
        for(let i = 0; i < 5; i++) {
            this.answer[i] = "0";
        }
    },
    methods: {
        checkQuiz: function() {
            let result = 0;
            let weight = 1;
            let sumWeight = 0;

            // Summation
            for(let i = 0; i < this.answer.length; i++) { 
                if(i != 4) {
                    result += weight * (parseInt(this.answer[i]));
                    sumWeight += weight;
                } else {
                    result += (weight * 2) * (parseInt(this.answer[i]));
                    sumWeight += (weight * 2);
                }
            }

            // Calculatin the media
            result /= sumWeight;

            // Result in percentage
            result /= 4;
            result = (result * 100);

            // Error margin
            if(result > 15) {
                result -= 10;
            }

            // Display Result to user
            this.result = parseFloat(result.toFixed(2));
            this.displayQuest = false;
        }
    }
});