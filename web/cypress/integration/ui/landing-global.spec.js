/// <reference types="cypress" />
//testes de responsividade

//executando o teste na largura de 1090. rodo o cypress a linha de comando abaixo
//npx cypress open --config viewportWidth=1090

context('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Navegar para o cadastro de aulas', () => {
      cy.get('div a.give-classes').click()
      cy.url().should('contain', 'give-classes')
    })

    it('Navegar para pesquisa de professores', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')
    })
})
