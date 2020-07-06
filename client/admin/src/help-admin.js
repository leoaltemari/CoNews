new Vue({
    el: '#app-help',
    data: {
        // Post help
        helpName: "",
        phoneNumber: "",
        stateHelp: "",
        helpErrors: [],
        helpSuccess: false,

        // Remove help
        removeHelpState: "",
    },
    methods: {
        // Help methods
        sendFormHelp: async function(event) {
            event.preventDefault();
            let jsondata = {
                name: this.helpName,
                phoneNumber: this.phoneNumber,
                state: this.stateHelp,
            };

            try {
                let res = await axios({
                    method: 'post',
                    url: 'http://localhost:8081/help',
                    data: jsondata,
                });
        
                this.helpErrors = [];
                this.helpErrors = res.data;

                if(this.helpErrors.length === 0) {
                    this.helpSuccess = true;
                }
            } catch(err) {
                console.log('message: ', err);
            }
        },
        removeHelp: async function(event) {
            event.preventDefault();
        
            const rmvState = this.removeHelpState;
            
            try {
                let res = await axios({
                    method: 'delete',
                    url: `http://localhost:8081/help/${rmvState}`,
                    data: {},
                });
            } catch(err) {
                console.log('message:', err);
            }
        },
        searchAllHelp: function(event) {
            event.currentTarget.href = `http://localhost:8081/help/`
            event.currentTarget.target = 'blank';
        },
    }
});