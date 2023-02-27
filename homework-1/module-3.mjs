export class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

let products = [
  new Product('Apple', 5000, 4, 'red'),
  new Product('Samsung', 4000, 61, 'white'),
  new Product('Xiaomi', 1000, 52, 'blue'),
  new Product('Nokia', 30000, 10, 'yellow'),
];

function getProducts(string) {
  const character = string.split("&")
  return products.filter((product) => {
    return character.every((part) => {
      const [field, operator, value] = part.split("-")
      if (field === "name" || field === "description") {
        switch (operator) {
          case "contains":
            return product[field].toLowerCase().includes(value)
          case "starts":
            return product[field].toLowerCase().startsWith(value)
          case "ends":
            return product[field].toLowerCase().endsWith(value)
          default:
            return false;
        }
      } else {
        const [field, value] = part.split("-")
        switch (value.slice(0, 2)) {
          case "<=":
            return product[field] <= +value.slice(2)
          case ">=":
            return product[field] >= +value.slice(2)
          default:
            switch (value.slice(0, 1)) {
              case "<":
                return product[field] < +value.slice(1)
              case "=":
                return product[field] === +value.slice(1)
              case ">":
                return product[field] > +value.slice(1)
              default:
                return false
            }
        }
      }
    })
  })
}

