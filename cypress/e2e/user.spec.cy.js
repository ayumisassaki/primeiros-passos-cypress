import userData from '../fixtures/UserData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfopage = new MyinfoPage()

describe('template spec', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    myinfopage.fillPersonalDetails(chance.first(), chance.last())
    myinfopage.fillEmployeeDetails('EmployId', 'ortherId', '2025-07-29', )
    myinfopage.fillStatus()
    myinfopage.saveForm()
    
  })

})

