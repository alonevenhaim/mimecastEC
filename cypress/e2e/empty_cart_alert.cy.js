describe('Empty Cart Alert', () => {
    it('should display an alert when trying to checkout with an empty cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce'); // Replace with valid login credentials

        cy.get('.shopping_cart_link').click(); // Navigate to cart
        cy.get('#checkout').click(); // Attempt to checkout

        // Verify the alert is displayed
        cy.get('.alert').should('contain', 'Your cart is empty');
    });
});
