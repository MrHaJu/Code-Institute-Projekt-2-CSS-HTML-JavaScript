# Code Institute Projekt 1 HTML and CSS - TESTING
 
 ## My Portfolio Website

 ![View on multiple screens](./images/view-on-multiple-screens.png)
 
 [View Quiz on Github Pages](https://mrhaju.github.io/Code-Institute-Projekt-2-CSS-HTML-JavaScript/)


## Contents

* [AUTOMATED TESTING](#automated-testing)
    * [W3C Validator](#w3c-validator)
    * [Lighthouse](#lighthouse)
    * [Wave](#wave)
    * [jshint](#javascript-validator)

* [MANUAL TESTING](#manual-testing)
    * [Full Testing](#full-testing)
    * [User Stories](#user-stories)
    * [Browser Testing](#browser-testing)

* [BUGS](#bugs)
    * [Known Bugs](#known-bugs)
    * [Solved Bugs](#solved-bugs)

---

## AUTOMATED TESTING

The Automated Testing includes all the testing that is carried out by a program, like W3C HTML validation.



Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.




### W3C Validator

* [Index Page HTML](./images/testing/w3c/w3cindex.png)
* [Quiz Page HTML](./images/testing/w3c/w3cquiz.png)
* [Instructions Page HTML](./images/testing/w3c/w3cinstructions.png)

#### **CSS Validation**

* [style.css CSS](./images/testing/w3c/w3cstylecss.png)

---

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

* [scripts.js](documentation/testing/validation/jshint-contact.png)
* [index.js](assets/images/testing/jshint/jshint-projects.png)
* [questions.json](assets/images/testing/jshint/jshint-projects.png)

### Json Validator

[jsonlint.com](https://jsonlint.com/) was used to validate the Json Data.

*[questions.json](./images/testing/jsonlint/jsonlintquestions.png)

- - -

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.

lighthouse testing :
* #### Desktop:

    * [Index Page - Test ](./images/testing/lighthouse/lightjouseindex-desktop.png)
    * [Instruction Page - Test ](./images/testing/lighthouse/lightjouseinstructions-desktop.png)
    * [Quiz Page - Test ](./images/testing/lighthouse/lightjousequiz-desktop.png)
    

* #### Mobile:

    * [Index Page - Test ](./images/testing/lighthouse/lightjouseindex-mobile.png)
    * [Instruction Page - Test ](./images/testing/lighthouse/lightjouseinstructions-mobile.png)
    * [Quiz Page - Test ](./images/testing/lighthouse/lightjousequiz-mobile.png)


### WAVE

* [Wave Test](./images/testing/wave/wavetest.png)


- - -

## MANUAL TESTING

There were no issues in the project.

### Solved Bugs

| Bug No | Bug Issue | How Resolved |
| :--- | :--- | :--- |
| 1 | On mobile devices, the app was a little off center to the right. | with justify content, this problem was solved |


### Known Bugs

| Known Bug No | Bug Issue | Plan to Resolve |
| :--- | :--- | :--- |
| 1 |  |  |




- - -

### Full Testing

Full testing was performed on the following devices, and additional testing for other devices was carried out using developer tools:

Desktop PC Windows 11, Samsung S20 Ultra, 46 inch monitor, 43 inch Ultra Wide 4k monitor, 27 inch monitor, windows 10 17 inch laptop, Asus Zen Phone, I Mac.

Each device tested the site using the following browsers:

Google Chrome and Microsoft edge on Windows and Android. Safari on Mac



| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| `Index Page` |  |  |  |  |
| Text Hover  | When hover over Text it will change colour | Hovered over Text | colour changed | Pass |
| Image Text | When click on Text below the Image, Details will be shown | clicked Text | Details showed up | Pass |
|  |  |  |  |  |
| `Quiz Page` |  |  |  |  |
| Text Hover  | When hover over Text it will change colour | Hovered over Text | colour changed | Pass |
| Carousel stop | When hover over Carousel, it stops turning.  | Hovered over carousel | turning stopped | Pass |
| Carousel scroll | When hover over Carousel, scrolling with Mousewheel scrolls through carousel | Hovered over Carousel, scrolled Mousewheel | Carousel scrolls | Pass |
| Carousel click | When click on a Projekt, shown in the Caousel it opens a new Page with the Project | clicked on Projekt in Carousel | New Page opens, shows project | Pass |
|  |  |  |  |  |
| `Instruction Page` |  |  |  |  |
| Hover Image | When hovering over the Image on Desktop Screen, it turns 180° and shows the CV | Hovered over Image | Image turns around and showed CV  | Pass |
|  |  |  |  |  |
| `Score Board` |  |  |  |  |
|  |  |  |  |  |
| Submit Form Button - No information entered by user | The form will direct the user to fill in the name field | Clicked submit button with no information filled in | Asked to fill in name field | Pass |
| Submit Form Button - Some information entered | User will be directed to fill in the fields they have left blank | Filled in only part of the form | Asked to fill in the missing fields | Pass |
| Submit form button - all fields filled out | Modal pop up with message confirming message successfully sent | Filled in all forms and pressed submit | Modal popped up with success message | Pass |
| Submit button - hover | when hovered over the button changes colour | Hovered over button | Button changed colour | Pass |
| Name input - focus | When input field is clicked on the border of the input field will change colour | Clicked on input field | Border changed colour | Pass |
| Email input - focus | When input field is clicked on the border of the input field will change colour | Clicked on input field | Border changed colour | Pass |
| Text Area - focus |When text area is clicked on the border of the text area will change colour | Clicked on text area | Border changed colour | Pass |
|  |  |  |  |  |


---

### User Stories
| Goals | How are they achieved? | Image |
|---|---|---|
| `First Time Visitors` |  |  |
|  |  |  |
| Understand what the site is for and how to navigate the site. | A description of what the site is is included on the home page. | :--- |
| Navigate to the projects page and view projects that have already been published | a carousel is integrated on the projects page in which the finished projects are available for selection | :--- |
| Navigate to the CV page and view the CV | On the CV page is a PDF image that if you hover over it on a desktop pc or laptop it will open the CV as a PDF for viewing. on mobile devices you can click on the PDF image and the CV will be downloaded | :--- |
| navigate to the Contact page to send a message to the site owner | On the contact page there is a contact form in which you can send your name, email address and a message to my Googlemail address. | :--- |
|  |  |  |
|`Returning Visitors`|  |  |
|  |  |  |
| Navigate to the projects page and view new projects that have been published | a carousel is integrated on the projects page in which the finished projects are available for selection | :--- |
| Navigate to the CV page and view the CV | On the CV page is a PDF image that if you hover over it on a desktop pc or laptop it will open the CV as a PDF for viewing. on mobile devices you can click on the PDF image and the CV will be downloaded | :--- |
| Navigate to the Contact page to send a message to the site owner | On the contact page there is a contact form in which you can send your name, email address and a message to my Googlemail address. | :--- |
|  |  |  |

---

### Browser Testing
| Browser | Layout | Functionality |
| :--- | :--- | :--- |
| Chrome | Desktop | ✔️ |
| Chrome | Mobile | ✔️ |
| Edge | Desktop | ✔️ |
| Edge | Mobile | ✔️ |
| Firefox | Desktop | ✔️ |
| Firefox | Mobile | ✔️ |

---

Back to [README.md](readme.md)