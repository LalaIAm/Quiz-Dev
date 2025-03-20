describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays a quiz logo, title, and description prominently', () => {
    cy.getByData('logo').should('be.visible')
    cy.getByData('title').should('be.visible').should('have.text', 'Test your knowledge')
    cy.getByData('description').should('be.visible').should('have.text', 'Challenge yourself with randomly generated quizzes')
  })

  it('includes a "Lets get started" button to initiate the quiz', () => {
    cy.getByData('button').should('be.visible').should('have.text', 'Let\'s Get Started')
  })
})