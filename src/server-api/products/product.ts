export class BaseProduct {
  name = "";
  default_code = "";
  barcode = "";
  list_price = 0;
  standard_price = 0;
  qty_available = 0;
  virtual_available = 0;
}

export class Product extends BaseProduct {
  id = 0;
}
