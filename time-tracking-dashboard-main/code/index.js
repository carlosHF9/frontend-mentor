
// Work
// Play
// Study
// Exercise
// Social
// Self care


const backgroundImagesLocation = [
    '../images/icon-work.svg',
    '../images/icon-play.svg',
    '../images/icon-study.svg',
    '../images/icon-exercise.svg',
    '../images/icon-social.svg',
    '../images/icon-self-care.svg'
]




function HoursComponent(category, hours, hoursLastWeek, index, backgroundSource) {

    return `
    <div class="time-tracking-card background-card-color-${index}">
        <div class="outer-content-card" style="background-image: url(${backgroundSource}) ; background-repeat: no-repeat;">
            <div class="inner-content-card">
                <div class="content">
                    <div class="content__header">
                        <span>${category}</span>
                        <img class="elilipsis-icon" src="../images/icon-ellipsis.svg" alt="... icon" />
                    </div>
                    <div class="content__info">
                        <h1>${hours} hrs</h1>
                        <span class="content__last-week">Last week - ${hoursLastWeek} hours</span>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    `
}

function UserComponent() {
    return `
    <div class="menu-card">
        <div class="user-info">
            <div class="user-info-content">
                <img class="jemery-picture" src="../images/image-jeremy.png" alt="Jeremy picture"/>
                <div>
                    <span class="report">Reported by</span>
                    <h1 class="user-name">Jemery Robson</h1>
                </div>
                
            </div>
        </div>
        <ul class="filter">
            <li><a href="#" class="set-filter" href="">Daily</a></li>
            <li><a href="#" class="set-filter" href="">Weekly</a></li>
            <li><a href="#" class="set-filter" href="">Monthly</a></li>
        </ul>
    </div> 
    `
}





let timeSetup = 'daily'


function GetJson() {

    return fetch('../data.json').then( res => res.json())
}



async function LoadData(checkItem=null) {
    const data = await GetJson()
    const container = document.querySelector('#time-tracking-grid')
    container.innerHTML = ''

    container.innerHTML += UserComponent()

    data.forEach( (item, index) => {
        const { timeframes, title } = item
        container.innerHTML = container.innerHTML + HoursComponent(title, timeframes[timeSetup].current, timeframes[timeSetup].previous, index + 1,  backgroundImagesLocation[index])
    })


    document.querySelectorAll('.set-filter')
        .forEach( (item) => {
            item.addEventListener('click', (e) => {
                timeSetup = e.target.innerHTML.toLowerCase()
                LoadData(item)

            })
        })
    
    


    
}

LoadData()









// console.log(document.querySelector('#time-tracking-grid').innerHTML)


// url('../images/icon-study.svg');

// document.querySelectorAll('.time-tracking-card')
//     .forEach((item, index) => {
//         item.style.backgroundImage = `url(${backgroundImagesLocation[index]})`
//     })






 
