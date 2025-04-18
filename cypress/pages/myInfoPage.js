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
        genericBoxField: ".oxd-select-text--arrow",
    }
    return selectors
}
        fillMyInfoPage() {
            cy.get(this.selectorsList().firstNameField).clear().type('FirstName')
            cy.get(this.selectorsList().lastNameField).clear().type('LastName')
            cy.get(this.selectorsList().genericField).eq(3).clear().type('EmpIdTest')
            cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
            cy.get(this.selectorsList().genericField).eq(5).clear().type('Drivers License Number Test')
            cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-03-10')
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genericBoxField).eq(0).click()
            cy.contains('Japanese').click ()
            cy.get(this.selectorsList().genericBoxField).eq(1).click()
            cy.contains('Married').click ()
            cy.get(this.selectorsList().genericField).eq(7).clear().type('1997-02-06')
            cy.get (this.selectorsList().dateCloseButton).click()
            cy.get (this.selectorsList().submitButton).eq(0).click()
            cy.get ('body').should('contain', 'Successfully Updated')
            cy.get ('.oxd-toast-close')

        }


}
export default MyinfoPage