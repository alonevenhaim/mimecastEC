cy.login = function(username, password) {
    cy.get('input[data-test="username"]').type(username);
    cy.get('input[data-test="password"]').type(password);
    cy.get('input[type="submit"]').click(); // Adjust if your login button has a different selector
};


describe('Add to Cart and Checkout Flow', () => {
    it('should add items to the cart and complete the checkout process', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq', 'Swag Labs')

        cy.get('input[data-test="username"]').should('be.visible');
        cy.get('input[data-test="password"]').should('be.visible');

        // Using the custom login function with credentials
        cy.login('standard_user', 'secret_sauce');


        // Adding items to the cart
        cy.get('.inventory_item').each(($el, index, $list) => {
            cy.wrap($el).find('button').click(); // Click on 'Add to Cart' button
        });

        cy.get('.shopping_cart_link').click(); // Navigate to cart

        // Proceed to checkout
        cy.get('#checkout').click();
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');
        cy.get('#continue').click();
        cy.get('#finish').click();

        // Verify the checkout is complete
        cy.get('h2.complete-header', { timeout: 10000 }).should('contain', 'THANK YOU FOR YOUR ORDER');
    });
});
