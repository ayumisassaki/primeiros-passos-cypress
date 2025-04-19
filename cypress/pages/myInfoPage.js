class MyinfoPage { 

    selectorsList() {
const selectors = {
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateBoxField: "[placeholder='yyyy-dd-mm']",
        dateCloseButton: ".--close", 
        submitButton: "[type='submit']",
        genericCombobox: ".oxd-select-text--arrow",
        secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
        thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)"
        }
    return selectors
}
        fillPersonalDetails(firstName, lastName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }

        fillEmployeeDetails(employeeId, otherId, driversLicenseDate) {

            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
            cy.get(this.selectorsList().genericField).eq(7).clear().type('2025-03-10')
            cy.get(this.selectorsList().dateCloseButton).click()

        }

        saveForm() {
            cy.get (this.selectorsList().submitButton).eq(0).click({ force: true })
            cy.get ('body').should('contain', 'Successfully Updated')
            cy.get ('.oxd-toast-close')

        }
        
        
        fillStatus() {
            cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
            cy.get(this.selectorsList().secondItemCombobox).click()
            cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
            cy.get (this.selectorsList().thirdItemCombobox).click()
        }

        
}

export default MyinfoPage