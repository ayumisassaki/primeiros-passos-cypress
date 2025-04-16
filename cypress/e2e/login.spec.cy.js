import userData from '../fixtures/UserData.json'



describe('template spec', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

const userData = {
  userSuccess: {
    username: 'Admin',
    password: 'admin123' 
  },

  userFail: {
    username:'Test',
    password: 'test'
  }
}

  it('login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('login - fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField). type('Test')
      cy.get(selectorsList.passwordField).type('admin123')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  })
})