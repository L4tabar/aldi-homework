### Bug-1 — Required fields are not indicated as required for virtual gift card

| Field                           | Value                   |
|---------------------------------|-------------------------|
| Type                            | Bug                     |
| Priority                        | Medium                  |
| Severity                        | Low                     |
| Affected application version(s) | v1.0.0                  |
| Labels                          | UI, FE, NeedsRefinement |
| Sprint                          | <TODO>                  |
| Story points                    | <TODO>                  |

#### Description
The required fields for the virtual gift card are not indicated as required on the product details page. The asterisk symbol is missing next to the field names.

#### Environment
OS: Windows 11
Browser: Google Chrome 152.0.7977.83

#### Preconditions
Open the https://demowebshop.tricentis.com/ website.

#### Steps to reproduce
1. Click the "Add to cart" button of the "$25 Virtual Gift Card" product in the "FEATURED PRODUCTS" list.
2. Check the following fields on the product details page:
    - Recipient's Name
    - Recipient's Email
    - Your Name
    - Your Email

#### Expected results
The required fields should be indicated as required with an asterisk symbol next to the field names.

#### Actual results
The required fields are not indicated as required on the product details page. The asterisk symbol is missing next to the field names.

Attached screenshot: [Bug-1.png](Bug-1.png)