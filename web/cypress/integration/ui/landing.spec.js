/// <reference types="cypress" />
//testes de responsividade

const larguras = [1200, 1090]

larguras.forEach(largura => {
context.skip(`Landing Page - ${largura}px`, () => {
    beforeEach(() => {
        cy.visit('/')
        //cy.viewport('width', 'height')
        cy.viewport(largura, 900)
        cy.log('Largura: ', largura)
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
})