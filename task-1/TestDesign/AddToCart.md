# Add to cart test cases

- [TC-1 — Adding a virtual gift card to the shopping list](#tc-1)
- [TC-2 — Adding multiple products to the shopping list](#tc-2)
- [TC-3 — Adding a virtual gift card without filling the required fields](#tc-3)

---

<a id="tc-1"></a>

### TC-1 — Adding a virtual gift card to the shopping list

#### Test Goal

Verify that a virtual gift card can be added to the shopping list from the "FEATURED PRODUCTS" list successfully.

#### Test Setup

| Field               | Value            |
|---------------------|------------------|
| Tested requirements | (US number)      |
| Test case version   | 1                |
| Version date        | 2026-09-05       |
| Test designer       | Attila Jakubat   |
| Execution type      | Manual           |
| Status              | Pending approval |
| Test Level          | E2E              |

##### Preconditions

- Open the https://demowebshop.tricentis.com/ website.

##### Test Steps

| Test action                                                                                                                                                                                                                   | Expected results                                                                                                                                                                                                                                                                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - Click the "Add to cart" button of the "$25 Virtual Gift Card" product in the "FEATURED PRODUCTS" list                                                                                                                       | - The product details page should be loaded<br/> - The following elements should be visible: <br/> 1. Recipient's Name<br/>2. Recipient's Email <br/>3. Your Name<br/> 4. Your Email<br/> 5. "Add to cart" button <br/>                                                                                                                                                 |
| - Fill the following fields with the values next to them:<br/>1. Recipient's Name: Test<br/>2. Recipient's Email: test@mail.com<br/>3. Your Name: Test<br/>4. Your Email: test@mail.com<br/> - Click the "Add to cart" button | - The product should be added to the shopping list successfully.<br/> - A green banner should appear at the top of the page with the following text: The product has been added to your shopping cart<br/> - The number in the bracket next to the "Shopping cart" menu item should be increased with the number defined in the "Qty" field on the product details page |
| - Click the "Shopping cart" menu item                                                                                                                                                                                         | - The shopping cart page should be loaded<br/> - The previously added product should be visible in the shopping cart with the correct quantity and details                                                                                                                                                                                                              |

---

<a id="tc-2"></a>

### TC-2 — Adding multiple products to the shopping list

#### Test Goal

Verify that multiple products can be added to the shopping list from the "FEATURED PRODUCTS" list successfully.

#### Test Setup

| Field               | Value            |
|---------------------|------------------|
| Tested requirements | (US number)      |
| Test case version   | 1                |
| Version date        | 2026-09-05       |
| Test designer       | Attila Jakubat   |
| Execution type      | Manual           |
| Status              | Pending approval |
| Test Level          | E2E              |

##### Preconditions

- Open the https://demowebshop.tricentis.com/ website.

##### Test Steps

| Test action                                                                                                                                                                                                                   | Expected results                                                                                                                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - Click the "Add to cart" button of the "$25 Virtual Gift Card" product in the "FEATURED PRODUCTS" list                                                                                                                       | - The product details page should be loaded                                                                                                                                                                                      |
| - Fill the following fields with the values next to them:<br/>1. Recipient's Name: Test<br/>2. Recipient's Email: test@mail.com<br/>3. Your Name: Test<br/>4. Your Email: test@mail.com<br/> - Click the "Add to cart" button | - The product should be added to the shopping list successfully<br/>- The number in the bracket next to the "Shopping cart" menu item should be increased with the number defined in the "Qty" field on the product details page |
| - Click the browser back button                                                                                                                                                                                               | - The "FEATURED PRODUCTS" list should be displayed again                                                                                                                                                                         |
| - Click the "Add to cart" button of the "14.1-inch Laptop" product in the "FEATURED PRODUCTS" list                                                                                                                            | - The product should be added to the shopping list successfully <br/>- The number in the bracket next to the "Shopping cart" menu item should be increased by 1                                                                  |
| - Click the "Shopping cart" menu item                                                                                                                                                                                         | - The shopping cart page should be loaded<br/> - The previously added products should be visible in the shopping cart with the correct quantity and details                                                                      |

---

<a id="tc-3"></a>

### TC-3 — Adding a virtual gift card without filling the required fields

#### Test Goal

Verify that a virtual gift card cannot be added to the shopping list if the required fields are not filled.

#### Test Setup

| Field               | Value            |
|---------------------|------------------|
| Tested requirements | (US number)      |
| Test case version   | 1                |
| Version date        | 2026-09-05       |
| Test designer       | Attila Jakubat   |
| Execution type      | Manual           |
| Status              | Pending approval |
| Test Level          | E2E              |

##### Preconditions

- Open the https://demowebshop.tricentis.com/ website.
- Click the "Add to cart" button of the "$25 Virtual Gift Card" product in the "FEATURED PRODUCTS" list.

##### Test Steps

| Test action                      | Expected results                                                                                                                                                                                                                                                                                                                                                            |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - Click the "Add to cart" button | - The product should not be added to the shopping list <br/>- The number in the bracket next to the "Shopping cart" menu item should not be changed<br/> - A red banner should appear indicating the missed required fields witht he follwing text:<br/>Enter valid recipient name<br/>Enter valid recipient email<br/>Enter valid sender name<br/>Enter valid sender email |
