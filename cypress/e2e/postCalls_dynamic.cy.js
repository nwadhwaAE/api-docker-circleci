describe('TS02 Dynamic POST Calls',()=>{

    it('Ap1 - request with static jsonObj',()=>{
        const reqBody = {
                tourist_name: 'nwadhwa',
                tourist_email: 'nwadhwa@gmail.com',
                tourist_location: 'Pune'
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: reqBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq('nwadhwa')
        })
    })


    it('Ap2 - request with dyanmic jsonObj',()=>{
        const reqBody = {
                tourist_name: 'nwadhwa'+Math.random().toString(5).substring(2),
                tourist_email: 'nwadhwa'+Math.random().toString(5).substring(2)+'@gmail.com',
                tourist_location: 'Pune'
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: reqBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_email).to.eq(reqBody.tourist_email)
        })
    })


    it.only('Ap3 - request with fixtured jsonObj',()=>{
        cy.fixture('tourist').then((fixData)=>{
            const reqBody = fixData;
        
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: reqBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_email).to.eq(reqBody.tourist_email)
        })
    })

    })
})