const App = {
    data() {
        return {
            // what belongs in 'data' is key-value pairs, in the form of arrays or whatever
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
            formValues: {
                slider: '5',
                toggle: false
            }
        }
    },
    // 'computed' is the other data-storage mechanism (besides 'data()') in Vue
    // 'computed' is based on 'data' because 'data' happens once, all at once, so if you need to reference something in 'data', it has to be in 'computed'
    // 'computed' functions run any time 'data' changes.
    // For 'computed': In the template, refer to function names as if they were keys (of key-value pairs)
    // For 'computed': Generally don't name the 'computed' properties like we generally name functions (verbs), but instead like we generally name keys (nouns)
     // what belongs in 'computed' is key-value pairs, in the form of functions
    computed: {
        price() {
            let currentPrice

            if (this.formValues.toggle) {
                currentPrice = (this.selected.monthlyPrice * 12 * .75).toFixed(2)
            } else {
                currentPrice = (this.selected.monthlyPrice).toFixed(2)
            }
            return currentPrice
        },
        subscriptionPeriod() {
            return this.formValues.toggle ? 'year' : 'month'
        },
        selected() {
            return this.mappings[+this.formValues.slider] // the object at the current index
        }
    }
}

Vue.createApp(App).mount('#app')