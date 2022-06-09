import { Areas } from "./Areas.js"
import { Services } from "./Services.js"
import { Guests } from "./Guests.js"



const mainContainer = document.querySelector('#container')

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="areas">
        <h2>Areas</h2>
        ${Areas()}
    </section>
    <aside class="guests>
        <section class="guests--list">
            <h2>Guests</h2>
            ${Guests()}
        </section>
    </aside>
</article>
    <section class="services--list">
        <h2>Services</h2>
        ${Services()}
    </section>

    
`

mainContainer.innerHTML = applicationHTML

