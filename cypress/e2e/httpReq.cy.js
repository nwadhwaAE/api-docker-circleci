describe('TS01 HTTP Requuest',()=>{
  
  it('Request 1 :: Get request',()=>{
    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200)
  })

  it('Request 2 :: Post request',()=>{
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts/',
      body: {
        title: "test post",
        body: "This is post call",
        userId: 1
      }
    })
    .its('status')
    .should('equal',201)
  })

  it('Request 3 :: Put request',()=>{
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        title: "test put request",
        body: "This is PUT call",
        userId: 1,
        id: 1
      }
    })
    .its('status')
    .should('equal',200)
  })


  it('Request 4 :: Delete request',()=>{
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    })
    .its('status')
    .should('equal',200)
  })


})