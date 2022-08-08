## How To Run This Project
  - npm install
  - npm start

## VIVA Front-End Take Home Challenge

Please create a simple website that supports an extremely simple loan application.

### Page 1: Personal Information

- start here when the site is loaded
- 4 required Input Sections
  - First Name
    - Must be non-empty
  - Last Name
    - must be non-empty
  - Date of Birth
    - must be valid date
    - must be less than 125 years old
    - must be more than 18 years old
  - Social Security Number
    - must be 9 digits
    - must not include any letters
    - must not be all the same number (111-11-1111 is invalid)
- "Next" Button
  - clicking this button will take you to Page 2
- no back button

### Page 2: Employment Information

- 3 required Input Sections
  - Employer Name
    - Must be non-empty
  - Gross Salary
    - must be more than $1000
    - must be valid money amount
  - Work Status
    - dropdown. no value chosen at start
    - options are Full-Time or Part-Time
- "Back" button
  - clicking this button will take you to page 1
- "next" button
  - clicking this button will show you either popup/modal 3a or 3b
    - if part-time or earn less than $15,000 gross salary, show popup/modal 3a
    - otherwise, show popup/modal 3b

### Page 3a: Small Loan Offer

- Text that says: "Congratulations you have been approved for a $500 loan!"
- "Accept" button
  - clicking this button launches a modal that says "Your funds are on the way! The loan term is 5 months."
- "Decline" button
  - clicking this button launches a modal that says "Sorry to hear that"
- "back" button
  - clicking this button sends you to page 2

### Page 3b: Large Loan Offer

- Text that says: "Congratulations you have been approved for a $10,000 loan!"
- "Accept" button
  - clicking this button launches a modal that says "Your funds are on the way! The loan term is 24 months."
- "Decline" button
  - clicking this button launches a modal that says "Sorry to hear that"
- "back" button
  - clicking this button sends you to page 2

### Notes

- if you go back from a page to a previous page, the information in each field should populate and be editable
- the next button should be enabled when a page is first seen, even with no data in it. when it is clicked the first time:
  - check if all data is valid. if all inputs pass validation, progress to the next page
  - if any inputs fail validation, indicate what errors exist and what should be done to fix the error. Make the next button disabled until all fields have valid inputs
- styling is completely up to your discretion. This is a chance to highlight your design and css skills. Make it look "good" following your own definition of "good".
- use any tech stack you would like. feel free to use CodePen, or create a react/vue/whatever project. Include instructions on how to run the project on local host
  - example instructions: Install Vue 3, run yarn, then run "npm run serve" and open a web browser at localhost:8080
- anything not included in these instructions is fair game for you make your own design decisions about. If you would like to skip some requirements or make simplifying assumptions you are free to do so, and we can cover your thought process during the next interview round.
