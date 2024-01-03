import {By, WebDriver, Builder, Capabilities, until, WebElement} from "selenium-webdriver"
import {BasePage} from "./BasePage"

export class NGS extends BasePage {
    driver: WebDriver;
    url: string = 'https://ngsc.freddecgames.com/'

    MissionsTab: By = By.xpath('//*[@id="sidebar-tabs"]/li[1]/button');
    ResourcesTab: By = By.xpath('//*[@id="sidebar-tabs"]/li[2]/button');
    Metal: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[1]/div/button'); 
    Gem: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[2]/div/button');
    Wood: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[3]/div/button');
    Scientists: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[1]/div/button');
    MetalGainBtn: By = By.xpath('//*[@id="metalGainCard"]/div/div/div[2]/div/div/div/div[2]/button');
    GemGainBtn: By = By.xpath('//*[@id="gemGainCard"]/div/div/div[2]/div/div/div/div[2]/button');
    WoodGainBtn: By = By.xpath('//*[@id="woodGainCard"]/div/div/div[2]/div/div/div/div[2]/button');
    WoodBuildBtn: By = By.xpath('//*[@id="woodT1Card"]/div/div/div[2]/div/div/div[3]/div[2]/button');
    MetalBuildBtn: By = By.xpath('//*[@id="metalT1Card"]/div/div/div[2]/div/div/div[3]/div[2]/button');
    GemBuildBtn: By = By.xpath('//*[@id="gemT1Card"]/div/div/div[2]/div/div/div[3]/div[2]/button');
    ScientistBuildBtn: By = By.xpath('//*[@id="scienceT1Card"]/div/div/div[2]/div/div/div[3]/div[2]/button');
    HomePage: By = By.xpath('//*[@id="earthPane"]/div[2]');
    Earth: By = By.xpath('//*[@id="missionsPane"]/div/div/div/div[2]/div/div/div/button');
    EarthNextBtn: By = By.xpath('//*[@id="missionFirstCard"]/div/div/div[2]/div/div/div[2]/div[2]/button');
    Metal2: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[2]/div/button');
    Gem2: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[3]/div/button');
    Wood2: By = By.xpath('//*[@id="resourcesPane"]/div/div/div/div[2]/div/div[4]/div/button');
    constructor(){
        super({url: 'https://ngsc.freddecgames.com/'});
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.HomePage));
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };
    async repeatClick(elementby: By, times: number = 100) {
        for (let i= 0; i<times; i++) {
            await this.click(elementby);
        };
    };
};