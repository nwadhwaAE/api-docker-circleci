describe('TS03 API testing with query parameters',()=>{

    it('Ap1: Passing query parameters',()=>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs:{page:2}
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.data).has.length(6)

        })
    })

})