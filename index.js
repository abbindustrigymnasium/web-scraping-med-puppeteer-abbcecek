const puppeteer = require("puppeteer")
const fs = require("fs")

async function getTemps () {
    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will be in full width and height)
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    })

    // Open a new page
    const page = await browser.newPage()

    // On this new page:
    // - open the website
    // - wait until the dom content is loaded (HTML is ready)
    await page.goto("https://www.yr.no/en/forecast/daily-table/2-7115757/Sweden/V%C3%A4stmanland/V%C3%A4ster%C3%A5s%20Municipality/Malmaberg", {
        waitUntil: "domcontentloaded",
    })

    // Click on "today" and wait for the pop-up to load

    const dailyItems = await page.$$('.daily-weather-list-item')
    const obj = {} // Declare obj outside of the loop

    // For loop that loops through each day
    for (const dailyItem of dailyItems) {
        await dailyItem.click()
        await page.waitForSelector('.modal-dialog__dialog')

        // Loop that loops through each element in the pop-up
        const temps = await page.evaluate(() => {
            const date = document.querySelector("#page-modal > div > div.modal-dialog__scroll-container > div > o-4-0-4 > div > div.modal-dialog__header > div > h2 > time").getAttribute("datetime")
            const tempList = document.querySelectorAll(".fluid-table__row")

            // Creates objects to store scraped data
            const hourly = {}
            const obj = {}

            // Finds the hour, temperature and weather of each hour and saves the data in the objects
            Array.from(tempList).map((times) => {
                const hour = parseInt(times.querySelector(".fluid-table__cell--align-left > span > span > span > time").innerHTML)
                const temperature = times.querySelector(".fluid-table__cell.fluid-table__cell--align-right > .fluid-table__cell-content > span > span").innerText
                const weather = times.querySelector(".fluid-table__cell.fluid-table__cell--align-center > .fluid-table__cell-content > span > .hourly-weather-table__weather > .weather-symbol > img").getAttribute("alt")
                console.log(weather)
                hourly[hour] = {
                    temperature, weather
                }
            })

            // Updates the objects that will be saved in the json file
            obj[date] = hourly

            return obj
        })

        Object.assign(obj, temps) // Merge temps into obj 
        await page.click(".close-button.modal-dialog__close-button")
    }


    // Display the times and temperatures
    console.log(obj)

    // Saves the data object in data.json
    const jsonString = JSON.stringify(obj)
    fs.writeFile('data.json', jsonString, (err) => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    //Close the browser
    await browser.close()


}

// Run the function and start scraping
getTemps()