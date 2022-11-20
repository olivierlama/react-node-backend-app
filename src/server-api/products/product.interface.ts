// {
//     id: 59,
//     name: 'new-name updated',
//     price_extra: 0,
//     lst_price: 1,
//     default_code: false,
//     code: false,
//     active: true,
//     standard_price: 0,
//     display_name: 'new-name updated',
//     qty_available: 0,
//     purchased_product_qty: 0,
//     list_price: 1
//   }
export interface BaseProduct {
  name: string;
  price_extra: number;
  lst_price: number;
  default_code: boolean;
  code: boolean;
  active: boolean;
  standard_price: number;
  display_name: string;
  qty_available: number;
  purchased_product_qty: number;
  list_price: number;
}
export interface Product extends BaseProduct {
  id: number;
}
