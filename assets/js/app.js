const App = {
    data() {
        return {
            // key-value pairs, in the form of arrays or whatever
            mappings: [
                {
                    pageviews: 25,
                    monthlyPrice: 2.00
                },
                {
                    pageviews: 40,
                    monthlyPrice: 7.00
                },
                {
                    pageviews: 55,
                    monthlyPrice: 11.50
                },
                {
                    pageviews: 70,
                    monthlyPrice: 15.50
                },
                {
                    pageviews: 85,
                    monthlyPrice: 19.00
                },
                {
                    pageviews: 100,
                    monthlyPrice: 22.00
                },
                {
                    pageviews: 115,
                    monthlyPrice: 24.50
                },
                {
                    pageviews: 130,
                    monthlyPrice: 26.50
                },
                {
                    pageviews: 145,
                    monthlyPrice: 28.00
                },
                {
                    pageviews: 160,
                    monthlyPrice: 29.00
                },
                {
                    pageviews: 175,
                    monthlyPrice: 29.50
                }
            ],
            views: '100',
            price: '22.00',
            formValues: {
                slider: '5',
                toggle: false
            },
            subscriptionPeriod: 'month'
        }
    },


    // // 'computed' is the other data-storage mechanism (besides 'data()') in Vue
    // // 'computed' is based on 'data()' because 'data()' happens once, all at once, so if you need to reference something in 'data()', it has to be in 'computed'
    // // 'computed' functions run any time 'data()' changes.
    // // For 'computed': In the template, refer to function names as if they were keys (of key-value pairs)
    // computed: {
    //     // key-value pairs, in the form of functions
    // },


    // 'methods' is for click events mainly...and to store other functions that will be explicitly called in the template
    methods: {
        updateText(event) {
            const object = this.mappings.find(obj => this.mappings.indexOf(obj) === +this.formValues.slider) // QQQ: Can this line be adapted to Vue any more than it already is?
            this.views = (object.pageviews).toString()

            // QQQ: The code just below works the same as the commented-out code block below it (labeled "ALMOST WORKS"): Every aspect of the code works except that on click of the toggle, the UI is not updating. But you'll notice that if you move the slider, things ARE updating. So it's just ON CLICK of the toggle things aren't updating. And, given my code, which seems pretty explicit and simple, I don't understand why. Again, at this point I'm not worried about the repetitveness of the code. I just want to understand why it's not working correctly.
            if (event.target.type === 'checkbox') {
                console.log('it is a CHECKBOX')
                if (this.formValues.toggle === true) {
                    this.price = (object.monthlyPrice * 12 * .75).toFixed(2)
                    this.subscriptionPeriod = 'year'
                } else {
                    this.price = (object.monthlyPrice).toFixed(2)
                    this.subscriptionPeriod = 'month'
                }
            } else {
                console.log('it is a SLIDER')
                if (this.formValues.toggle === true) {
                    this.price = (object.monthlyPrice * 12 * .75).toFixed(2)
                    this.subscriptionPeriod = 'year'
                } else {
                    this.price = (object.monthlyPrice).toFixed(2)
                    this.subscriptionPeriod = 'month'
                }
            }


            // ALMOST WORKS
            // if (this.formValues.toggle === true) { /////////////// LEFT OFF HERE: This line isn't working properly right when toggle is checked and unchecked. (In "vanilla" JS, this line was: document.getElementById('monthly-yearly-toggle').checked === true.)
            //     this.price = (object.monthlyPrice * 12 * .75).toFixed(2)
            //     this.subscriptionPeriod = 'year'
            // } else {
            //     this.price = (object.monthlyPrice).toFixed(2)
            //     this.subscriptionPeriod = 'month'
            // }
        
        }
    }



    // // 'mounted' runs once, just after the component is created and placed on the page
    // mounted() {
    //     ///////
    // }


}

Vue.createApp(App).mount('#app')