import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Input } from "antd";

import VirtualTable from "components/virtualTable";
import { columns } from "@/utils/tableColumns";
import useDebounce from "@/hooks/useDebounce";

import styles from "@/styles/home.module.scss";

const { Search } = Input;

const Home = (props) => {
  const { productsList, isLoading } = props;
  const [list, setList] = useState([]);
  const [inputing, setInputing] = useState({});
  const searchBar = useRef();

  useEffect(() => {
    setList(productsList);
  }, [productsList]);

  useEffect(() => {
    props.getProducts();
  }, []);

  const compareTerms = (compare, term) =>
    compare.toLowerCase().includes(term.toLowerCase());

  const searchItens = (value) => {
    if (!value) setList(productsList);
    else {
      const newList = productsList.filter(
        (elem) =>
          compareTerms(elem.product, value) || compareTerms(elem.origin, value)
      );
      setList(newList);
    }
  };

  useDebounce(() => searchItens(inputing?.target?.value), 300, inputing);

  return (
    <div className={styles.homepageWrapper}>
      <div className={styles.homepageWrapper__header}>
        <h1>Ultimate Grid Data</h1>
        <Search
          ref={searchBar}
          placeholder="Search by product or origin"
          enterButton="Search"
          size="large"
          onSearch={searchItens}
          onPressEnter={(e) => searchItens(e.target.value)}
          className={styles.searchbar}
          allowClear={true}
          onChange={setInputing}
        />
      </div>
      <VirtualTable
        columns={columns}
        dataSource={list}
        scroll={{ y: 400 }}
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
