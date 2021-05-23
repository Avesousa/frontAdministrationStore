import { Category } from "./category";

export class Product {
  _id: string;
  category: Category;
  code: string;
  description: string;
  ext: string;
  imagen: string;
  inventoryStatus: string;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  store: number;

  constructor(
  ) {
  }

  setCategory(categoria: Category) {
    this.category = categoria;
  }

}
