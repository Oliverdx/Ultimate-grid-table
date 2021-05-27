import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";

import VirtualTable from "components/virtualTable";
import { columns } from "@/utils/tableColumns";
import styles from "@/styles/home.module.scss";

const { Search } = Input;

const Home = (props) => {
  const { productsList, isLoading } = props;

  const onSearch = (value) => console.log(value);

  return (
    <div className={styles.homepageWrapper}>
      {productsList && (
        <button onClick={() => props.getProducts()}>Load Products</button>
      )}
      <Search
        placeholder="Search by product or origin"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        className={styles.searchbar}
      />
      <VirtualTable
        columns={columns}
        dataSource={productsList}
        scroll={{ y: 400, x: "100vw" }}
        loading={isLoading}
      />
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
