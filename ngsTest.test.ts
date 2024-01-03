import { NGS } from "./ngsObjectPage";
const NGSC = new NGS();

test ('Loading game, Completing Starting Mission, & Building Pickaxes', async () => {
    try{
        console.log("Loading Game");
        await NGSC.navigate();
        console.log("Clicking Resources Tab");
        await NGSC.click(NGSC.ResourcesTab);
        console.log("Gaining Metal");
        await NGSC.click(NGSC.Metal);
        await NGSC.repeatClick(NGSC.MetalGainBtn, 50);
        console.log("Gaining Gems");
        await NGSC.click(NGSC.Gem);
        await NGSC.repeatClick(NGSC.GemGainBtn, 50);
        console.log("Gaining Wood");
        await NGSC.click(NGSC.Wood);
        await NGSC.repeatClick(NGSC.WoodGainBtn, 50);
        console.log("Clicking Missions Tab");
        await NGSC.click(NGSC.MissionsTab);
        console.log("Clicking Earth");
        await NGSC.click(NGSC.Earth);
        await NGSC.click(NGSC.EarthNextBtn);
        console.log("Clicking Resources Tab");
        await NGSC.click(NGSC.ResourcesTab);
        console.log("Creating Pickaxes");
        await NGSC.click(NGSC.Metal2);
        await NGSC.click(NGSC.MetalBuildBtn);
        await NGSC.click(NGSC.Gem2);
        await NGSC.click(NGSC.GemBuildBtn);
        await NGSC.click(NGSC.Wood2);
        await NGSC.click(NGSC.WoodBuildBtn);
        await NGSC.driver.quit();
    } catch (error) {
        console.error("An error occurred:", error);    
    };
});