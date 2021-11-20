/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        //preciso das informações contidas em network
        //Request url: http://localhost:3333/classes
        //Request metodo: POST
        //status code: 201 created

        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Leticia Tayt-sohn",
                "avatar":"",
                "whatsapp":"21993267658",
                "bio":"Aulas particulares",
                "subject":"Matemática",
                "cost":100,
                "schedule":[
                   {
                      "week_day":"1",
                      "from":"08:00",
                      "to":"09:00"
                   }
                ]
             }
        }).then((response) => {
            //asserções do post
            //algumas ascerções:
            //status 201
            expect(response.status).to.eq(201)

            //duração até 20 segundos
            expect(response.duration).lessThan(200)

        
        })

    })
})