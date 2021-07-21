require('chromedriver');
const {Builder, By} = require('selenium-webdriver');


async function testWebPage(){

    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get("https://www.epam.com/");
    const narrow = await driver.findElement(By.className("background-video__container"))
    await narrow.isDisplayed();
    const aboutButton = await driver.findElement(By.css(".top-navigation__item-link[href='/about']"));
    const actions = driver.actions({async: true});
    await actions.move({origin:aboutButton}).perform(); //mouse action
    const historyButton = await driver.findElement(By.css(".top-navigation__sub-link[href='/about/who-we-are/history']"));
    await historyButton.isDisplayed();
    await actions.move({origin:historyButton}).click().perform(); // mouse action
    await driver.manage().setTimeouts( { implicit: 3000 } );
    const videoButton = await  driver.findElement(By.css(".video__button"));
    await videoButton.isDisplayed();
    const careersButton =await driver.findElement(By.css(".top-navigation__item-link[href='/careers']"));
    await careersButton.click();

    await driver
    const searchField = await driver.findElement(By.id("jobSearchFilterForm"));
    await searchField.isDisplayed();
    const keyword = await driver.findElement(By.id("new_form_job_search_1445745853_copy-keyword"));
    await driver.executeScript("arguments[0].click()", keyword); // javascript Executor

    await keyword.sendKeys("QA");
    await driver.manage().setTimeouts( { implicit: 10000 } );
    const firstFromDropdown = await driver.findElement(By.css(".autocomplete-suggestion[data-index='0']"));
    await firstFromDropdown.isDisplayed();
    await firstFromDropdown.click();
    const choseLocation = await driver.findElement(By.css('.select2-selection__arrow'));
    await choseLocation.isDisplayed();
    await choseLocation.click();
    const locationCanada = await driver.findElement(By.css("[aria-label='Canada']"));
    await driver.executeScript("arguments[0].scrollIntoView();", locationCanada);// javascript Executor
    await locationCanada.isDisplayed();
    await locationCanada.click();
    const allCitiesCanada = await driver.findElement(By.xpath("//li[@title='All Cities in Canada']"));
    await allCitiesCanada.isDisplayed();
    await allCitiesCanada.click();
    await driver.sleep(3000);
    const findButton = await driver.findElement(By.css(".recruiting-search__submit"));
    await findButton.isDisplayed();
    await findButton.click();
    await driver.sleep(3000);
    const tittleOfFoundVacancy = driver.findElement(By.xpath("//h1"));
    await tittleOfFoundVacancy.isDisplayed();

    await driver.quit();
};

testWebPage()