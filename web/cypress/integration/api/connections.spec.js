/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoint', () => {
    it('GET - obter total de conexões realizadas', () => {
        //preciso das informações contidas em network
        //Request url: http://localhost:3333/connections
        //Request metodo: GET
        //status code: 200
       
        //fazendo uma requisição
        
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            //algumas ascerções:
            //status 200
            expect(response.status).to.eq(200)

            //duração até 20 segundos
            expect(response.duration).lessThan(20)

            //conferindo o total - total tem que ser um numero e maior que 5
            expect(response.body).to.have.property('total')
            .to.be.a('number')
            .greaterThan(5)

            expect(response.body.total)
            .an('number')
            .satisfy((totalValue) => {return totalValue >= 5})

            // Content-Type: application/json; charset=utf-8
            expect(response.headers).to.have.property('content-type')
            .an('string')
            .equal('application/json; charset=utf-8')
        })
    })
})