new Vue({
    el: '#app',
    data: {
        selectedState: "",
        success: false,
        findedNews: [],
        lastState: "",
        urlList: [],
    },
    methods: {
        ajustImagePath: function(_list) {
            for(let i = 0; i < _list.length; i++) {
                _list[i].image.url = "../../" + _list[i].image.url;
            }
            return;
        },
        searchNews: async function(event) {
            if(this.selectedState.length > 0 && this.selectedState != this.lastState) {
                this.lastState = this.selectedState;

                const json = {
                    state: this.selectedState,
                }

                try {
                    let res = await axios({
                        method: 'get',
                        url: `http://localhost:8081/news/${this.selectedState}`,
                        data: json,
                    });
            
                    this.findedNews = res.data;

                    this.ajustImagePath(this.findedNews);

                    if(this.findedNews.length > 0) {
                        this.success = true;
                    } else {
                        this.success = false;
                    }
                } catch(err) {
                    console.log('message: ', err);
                }
            }
        }
    }

});