export const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    sorter: (a, b) => a.product.localeCompare(b.product),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Industry",
    dataIndex: "industry",
    key: "industry",
  },
  {
    title: "Origin",
    dataIndex: "origin",
    key: "origin",
    sorter: (a, b) => a.origin.localeCompare(b.origin),
  },
];
