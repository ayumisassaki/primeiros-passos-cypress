import userData from '../fixtures/UserData.json'



describe('template spec', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    DashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
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

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.DashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get (selectorsList.genericField).eq(3).clear().type('EmpIdTest')
    cy.get (selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get (selectorsList.genericField).eq(5).clear().type('Drivers License Number Test')
    cy.get (selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get (selectorsList.dateCloseButton).click()
    cy.get (selectorsList.submitButton).eq(0).click()
    cy.get ('body').should('contain', 'Successfully Updated')
    cy.get ('.oxd-toast-close')
  })

  it('login - fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField). type('Test')
      cy.get(selectorsList.passwordField).type('admin123')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  })
})