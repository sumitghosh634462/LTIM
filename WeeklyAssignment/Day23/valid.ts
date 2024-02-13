// Task 1: Define a TypeScript Class
export class Product {
    // Fields
    productID: string;
    productName: string;
    productPrice: number;
  
    // Constructor
    constructor(productID: string, productName: string, productPrice: number) {
      this.productID = productID;
      this.productName = productName;
      this.productPrice = productPrice;
    }
  
    // Method to display product details
    displayDetails(): void {
      console.log(`Prod ${this.productID}: \n pname ${this.productName} \n costs $${this.productPrice}`);
    }
  }
  
  // Task 2: Object Creation and Method Invocation
  // 1. Create an object of the Product class.
  const sampleProduct = new Product('P12345', 'Smartphone', 299.99);
  
  // 2. Invoke the displayDetails method using the created object.
  sampleProduct.displayDetails();
  
  // Test Cases
  // - The Product class should successfully compile without any TypeScript errors.
  // - The created object should correctly represent a product with the specified fields.
  // - The displayDetails method, when invoked, should correctly log the product's details to the console.
  