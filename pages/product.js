export class product {
  constructor(page) {
    this.page = page;
    //Selectors used for the login page
    this.searchField = page.locator("[id='search_product']");
    this.searchBtn = page.locator("button[type='button']");
    this.productName = page.locator(
      "(//div[@class='productinfo text-center']//p)[1]"
    );
    this.productLink = page.locator("i.material-icons.card_travel");
    this.womenLink = page.locator("//a[contains(.,'Women')]");
    this.topsLink = page.locator("(//div[@class='panel-body']//a)[2]");
    this.categoryTitle = page.locator("h2.title.text-center");
    this.poloLink = page.locator("//a[contains(.,'(6)Polo')]");
    this.viewProductLink = page.locator("(//i[@class='fa fa-plus-square'])[1]");
    this.nameField = page.locator("input#name");
    this.emailField = page.locator("input#email");
    this.reviewBlock = page.locator("#review");
    this.submitBtn = page.locator("#button-review");
    this.submittedLabel = page.locator("div#review-section>div>div");
    this.addToCartBtn = page.locator(
      "(//a[contains(@class,'btn btn-default')])[1]"
    );
    this.addToCartBtn2 = page.locator(
      "(//a[contains(@class,'btn btn-default')])[2]"
    );
    this.addedLabel = page.locator("h4.modal-title.w-100");
    this.viewCartLink = page.locator("//u[text()='View Cart']");
    this.removeBtn = page.locator("a.cart_quantity_delete");
    this.emptyCartLabel = page.locator("span#empty_cart>p>b");

    //Data used for the login page
    this.searchFor = "Top";
    this.brandName = "Polo";
    this.nameText = "John";
    this.emailText = "John19@gamil.com";
    this.reviewText = "The product is amazing!";
    this.submittedText = "Thank you for your review.";
    this.addedText = "Added!";
    this.emptyCartText = "Cart is empty!";
  }
  async searchForProduct(product) {
    await this.productLink.click();
    await this.searchField.fill(product);
    await this.searchBtn.click();
  }
  async productByCategory() {
    await this.womenLink.click();
    await this.topsLink.click();
  }
  async productByBrand() {
    await this.poloLink.click();
  }
  async productReview() {
    await this.productLink.click();
    await this.viewProductLink.click();
    await this.nameField.fill(this.nameText);
    await this.emailField.fill(this.emailText);
    await this.reviewBlock.fill(this.reviewText);
    await this.submitBtn.click();
  }
  async addToCart() {
    await this.productLink.click();
    await this.addToCartBtn.hover();
    await this.addToCartBtn2.click();
  }
  async removeProduct() {
    await this.viewCartLink.click();
    await this.removeBtn.click();
  }
};
