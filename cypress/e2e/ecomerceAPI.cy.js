describe('TS05 e-commerce API testing -parsing JSON response',()=>{

    it('Ap1: Parsing json response',()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].price).to.eq(109.95)

        })
    })
let tp =0
    it('Ap2: Parsing json response with limited response',()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs:{limit:5}
        })
        .then((response)=>{
            expect(response.status).equal(200)
            response.body.forEach(obj =>{
                tp = tp+obj.price
            })
            expect(tp).to.eq(899.23)

        })
    })

})