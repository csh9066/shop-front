export enum ProductCategory {
  BEAUTY = 'beauty',
  MENS_CLOTHING = 'mens_clothing',
  WOMEN_CLOTHING = 'women_clothing',
  BOOK = 'book',
  CAMERA = 'camera',
  INSTRUMENT = 'instrument',
  BABY = 'baby',
  HOUSEHOLD_GOODS = 'household_goods',
  HANDMADE = 'handmade',
  DIGITAL = 'digital',
  TICKET = 'ticket',
  FURNITURE = 'furniture',
  GAME = 'game',
  FOOD = 'food',
}

export enum ProductStatus {
  USED = 'used',
  NEW = 'new',
  ALMOST_NEW = 'almost_new',
}

export interface ProductForm {
  images: string[];
  title: string;
  category: string;
  description: string;
  status: string;
  price: number;
}
