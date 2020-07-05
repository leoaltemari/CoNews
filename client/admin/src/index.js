new Vue( {
    el: '#app',
    data: {
        // Post news
        link: "",
        date: "",
        title:  "",
        state: "",
        errors: [],
        success: false,

        // Remove news
        removeTitle: "",

        // Search news
        searchState: "",
    },
    methods: {
        sendForm: async function(event) {
            event.preventDefault();
            var image = $("#file-img")[0].files[0];
            var formdata = new FormData();

            formdata.append('link', this.link);
            formdata.append('file', image);
            formdata.append('date', this.date);
            formdata.append('title', this.title);
            formdata.append('state', this.state);

            
            let res = await axios({
                method: 'post',
                url: 'http://localhost:8081/news',
                data: formdata,
            })
    
            this.errors = [];
            this.errors = res.data;
            console.log(this.errors);

            if(this.errors.length === 0) {
                this.success = true;
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
        searchNews: async function(event) {
            event.currentTarget.href = `http://localhost:8081/news/${this.searchState}`
            event.currentTarget.target = 'blank';
        }
    }
});