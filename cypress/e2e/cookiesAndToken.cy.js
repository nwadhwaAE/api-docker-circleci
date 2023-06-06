describe('TS04 API testing with Cookies and Bearer token',()=>{

let authToken = null
    before('Post request for the bearer token',()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type': 'application/json'
            },
            body:{
                clientName: 'ABC',
                clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
            }
        })
        .then((response)=>{
            authToken=response.body.accessToken;

        })

    })

    before('Pre order creation for remaining test cases',()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            body:{
                bookId: 1,
                cusotmerName: "xyzabc"
            }
        })
        .then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.created).equal(true)


        })

    })
   
    it('Ap1: Passing cookies to the GET request',()=>{
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            cookies:{
                'cookieName': 'myCookie'
            }
        })
        .then((response)=>{
            expect(response.status).equal(200)
            
        })
    })

})