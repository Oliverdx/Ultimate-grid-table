import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

const Home = (props) => {
  const { productsList, isLoading } = props;

  if (isLoading && productsList.length === 0) return <div>Loading...</div>;

  const columns = [
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

  return (
    <div>
      <button onClick={() => props.getProducts()}>Load Products</button>
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        {productsList?.map((item, index) => (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            key={`${index}-${item.origin}-${item.product}`}
          >
            <span>{item.product}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            <span>{item.type}</span>
            <span>{item.industry}</span>
            <span>{item.origin}</span>
          </div>
        ))}
      </div> */}
      <Table dataSource={productsList} columns={columns} />
    </div>
  );
};

const mapState = (state) => ({
  productsList: state.products.list,
  isLoading: state.products.isLoading,
});

const mapDispatch = ({ products: { getProducts } }) => ({
  getProducts: () => getProducts(),
});

const HomeContainer = connect(mapState, mapDispatch)(Home);

export default HomeContainer;
