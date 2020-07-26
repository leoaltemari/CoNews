new Vue({
    el: '#app',
    data: {
        selectedState: "",
        success: false,
        lastState: "",
        urlList: [],
        findedHelp: {},
    },
    methods: {
        searchHelp: async function(event) {
            if(this.selectedState.length > 0 && this.selectedState != this.lastState) {
                this.lastState = this.selectedState;
                
                try {
                    let res = await axios({
                        method: 'get',
                        url: `http://localhost:8081/help/${this.selectedState}`,
                    });
                    
                    this.findedHelp = res.data;
                } catch(err) {
                    console.log('message: ', err);
                }
            }
        }
    }

});