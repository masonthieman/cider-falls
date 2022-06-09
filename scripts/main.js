import { Areas } from "./Areas.js"
import { Services } from "./Services.js"
import { Guests } from "./Guests.js"



const mainContainer = document.querySelector('#container')

const applicationHTML = `
<h1>Cider Falls</h1>
    <section class="areas--list">
        <h2>Areas</h2>
        ${Areas()}
    </section>
    <section class="services--list">
        <h2>Services</h2>
        ${Services()}
    </section>
    <section class="guests--list">
        <h2>Guests</h2>
        ${Guests()}
    </section>
`

mainContainer.innerHTML = applicationHTML

