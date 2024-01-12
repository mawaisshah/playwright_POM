import { test, expect } from "../../plugins/e2e_helpers";
test.use({ storageState: "./loginAuth.json" });
import { setupHooks, page } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to logout from the site", async ({
    Login,
    Contact
}) => {
    await page.pause()
    await Login.userLogin();
    await Contact.getInTouch();
    await Contact.chooseFile();
    await expect(Contact.Success).toHaveText(Contact.successText);
});
