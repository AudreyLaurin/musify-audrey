const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://idix2ndiefd47ahsrk4lwdpywa.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-vbvqlxvldbaefhlcwwrhpakzxq',
        },
        data: {
            query, variables
        },
    });