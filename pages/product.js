exports.product = class product {
    constructor(page) {
      this.page = page;
      //Selectors used for the login page
      this.searchField = page.locator("[id='search_product']");
      this.searchBtn = page.locator("button[type='button']");
      this.productName = page.locator("(//div[@class='productinfo text-center']//p)[1]");
      this.productLink = page.locator("i.material-icons.card_travel");
      this.womenLink = page.locator("//a[contains(.,'Women')]");
      this.topsLink = page.locator("(//div[@class='panel-body']//a)[2]");
      this.categoryTitle = page.locator("h2.title.text-center");
      this.poloLink = page.locator("//a[contains(.,'(6)Polo')]");

      
      //Data used for the login page
      this.searchFor = "Top";
      this.brandName = "Polo";
     
    }
    async searchForProduct(product) {
      await this.productLink.click();
      await this.searchField.fill(product);
      await this.searchBtn.click();
    }
    async productByCategory(){
      await this.womenLink.click();
      await this.topsLink.click();
    }
    async productByBrand(){
      await this.poloLink.click();
    }
  }
  