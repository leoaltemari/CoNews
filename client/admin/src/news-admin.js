new Vue( {
    el: '#app-news',
    data: {
        // Post news
        link: "",
        date: "",
        title:  "",
        state: "",
        newsErrors: [],
        newsSuccess: false,
        
        // Remove news
        removeTitle: "",

        // Search news
        searchNewsState: "",

        
    },
    methods: {
        // News methods
        sendFormNews: async function(event) {
            event.preventDefault();
            let image = $("#file-img")[0].files[0];
            let formdata = new FormData();

            formdata.append('link', this.link);
            formdata.append('file', image);
            formdata.append('date', this.date);
            formdata.append('title', this.title);
            formdata.append('state', this.state);

            try {
                let res = await axios({
                    method: 'post',
                    url: 'http://localhost:8081/news',
                    data: formdata,
                });
        
                this.newsErrors = [];
                this.newsErrors = res.data;

                if(this.newsErrors.length === 0) {
                    this.newsSuccess = true;
                }
            } catch(err) {
                console.log('message: ', err);
            }
        },
        removeNews: async function(event) {
            event.preventDefault();
        
            const rmvTitle = this.removeTitle;
            
            let res = await axios({
                method: 'delete',
                url: `http://localhost:8081/news/${rmvTitle}`,
                data: {},
            })
        },
        searchNews: function(event) {
            event.currentTarget.href = `http://localhost:8081/news/${this.searchNewsState}`
            event.currentTarget.target = 'blank';
        },
        searchAllNews: function(event) {
            event.currentTarget.href = `http://localhost:8081/news/`
            event.currentTarget.target = 'blank';
        },

        
    }
});