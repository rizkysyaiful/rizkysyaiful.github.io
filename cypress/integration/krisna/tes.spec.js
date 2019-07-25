// cypress/integration/krisna/tes.spec.js

/// <reference types="Cypress" />

/* eslint-env mocha */
/* global cy */
describe('Access Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('login', () => {
        cy.contains('KRISNA 2020')
        cy.get('.select2-selection__arrow').click()
    })
})