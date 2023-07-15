// App State
const reviews = [
    {id:0, personaName: "Anna B.", job: "Web Designer", img: "https://img.freepik.com/free-photo/portrait-attractive-woman-has-healthy-skin-has-toothy-smile-looks-directly-wears-green-jumper-has-long-straight-hair-poses-against-pink-pastel-wall-face-expressions-concept_273609-42674.jpg", descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab provident voluptate aspernatur accusantium odio tenetur quam, atque facilis blanditiis quidem enim unde officia vel voluptatum dolorem amet, esse sed?'}, 
    {id:1, personaName: "Chris J.", job: "Java Junior Developer", img: "https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg", descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab provident voluptate aspernatur accusantium odio tenetur quam, atque facilis blanditiis quidem enim unde officia vel voluptatum dolorem amet, esse sed?'}, 
    {id:2, personaName: "Olga R.", job: "Senior Project Manager", img: "https://img.freepik.com/free-photo/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling_295783-39.jpg", descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab provident voluptate aspernatur accusantium odio tenetur quam, atque facilis blanditiis quidem enim unde officia vel voluptatum dolorem amet, esse sed?'}, 
]

let personaId = Math.floor(Math.random() * reviews.length)

window.addEventListener('DOMContentLoaded', function() {
    showPersonaById(personaId)

    document.querySelector('#prevBtn').addEventListener('click', function() {
        onPrevBtnClicked()
    })

    document.querySelector('#nextBtn').addEventListener('click', function() {
        onNextBtnClicked()
    })
})

function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const { personaName, job, img: image, descr} = persona
    document.querySelector('#personaImg').src = image
    document.querySelector('#personaName').innerHTML = personaName
    document.querySelector('#personaJob').innerHTML = job
    document.querySelector('#personaDescr').innerHTML = descr
}

/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */
function onPrevBtnClicked() {
    showPrevPersona()
}

/**
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClicked() {
    showNextPersona()
}

/**
 * Circulary finds the previous persona id and shows the persona.
 */
function showPrevPersona() {
    personaId = (personaId < 0) ? reviews.length - 1 : --personaId
    showPersonaById(personaId)
}

/**
 * Circulary finds the next persona id and shows the persona.
 */
function showNextPersona() {
    personaId = (++personaId % reviews.length)
    showPersonaById(personaId)
}
