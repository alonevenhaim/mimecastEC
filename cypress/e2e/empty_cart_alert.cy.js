cy.login = function(username, password) {
    cy.get('input[data-test="username"]').type(username);
    cy.get('input[data-test="password"]').type(password);
    cy.get('input[type="submit"]').click();
};

describe('Empty Cart Alert', () => {
    it('should display an alert when trying to checkout with an empty cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq', 'Swag Labs')

        cy.get('input[data-test="username"]').should('be.visible');
        cy.get('input[data-test="password"]').should('be.visible');

        // Using the custom login function with credentials
        cy.login('standard_user', 'secret_sauce');

        cy.get('.shopping_cart_link').click(); // Navigate to cart
        cy.get('#checkout').click(); // Attempt to checkout

        // Verify the alert is displayed
        cy.get('.alert').should('contain', 'Your cart is empty');
    });
});
