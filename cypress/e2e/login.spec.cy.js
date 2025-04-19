
import userData from '../fixtures/UserData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
describe('Login Orange HRM Tests', () => {


  it('login - fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
  })

  it('User Info Update - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
  })

})