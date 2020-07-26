new Vue({
    el: '#app-help',
    data: {
        // Post help
        helpName: "",
        phoneNumber: "",
        stateHelp: "",
        helpLink: '',
        helpErrors: [],
        helpSuccess: false,

        // Remove help
        removeHelpState: "",
        removeErrors: "",
        removeErrorFlag: false,
        removeSucess: "",
        removeSuccessFlag: false,
    },
    methods: {
        // Help methods
        sendFormHelp: async function(event) {
            this.helpSuccess = false;
            event.preventDefault();
            let jsondata = {
                name: this.helpName,
                phoneNumber: this.phoneNumber,
                state: this.stateHelp,
                link: this.helpLink
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
                } else {
                    this.helpSuccess = false;
                }
            } catch(err) {
                console.log('message: ', err);
            }
        },
        removeHelp: async function(event) {
            event.preventDefault();
        
            const rmvState = this.removeHelpState;

            if(rmvState.length === 0) {
                this.removeErrors = 'Nenhum estado foi selecionado';
                this.removeErrorFlag = true;
                this.removeSuccessFlag = false;
                return;
            }
            
            try {
                const url = `http://localhost:8081/help/${rmvState}`
                await axios.delete(url)
                    .then(response => {
                        console.log(response.data);
                        if(response.data.message === 'Nenhum item foi encontrado') {
                            this.removeErrors = response.data.message;
                            this.removeErrorFlag = true;
                            this.removeSuccessFlag = false;
                        } else {
                            this.removeSuccess = response.data.message;
                            this.removeSuccessFlag = true;
                            this.removeErrorFlag = false;
                        }
                    })
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