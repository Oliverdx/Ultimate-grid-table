import React, { useState, useEffect, useRef } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import ResizeObserver from "rc-resize-observer";
import { Table } from "antd";

import styles from "./style.module.scss";

function VirtualTable(props) {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);

  const widthColumnCount = columns.length;
  const mergedColumns = columns.map((column) => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  });

  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, "scrollLeft", {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft });
        }
      },
    });

    return obj;
  });

  const resetVirtualGrid = () => {
    gridRef?.current?.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData, { scrollbarSize, ref }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;

    return (
      <Grid
        ref={gridRef}
        columnCount={mergedColumns.length}
        columnWidth={(index) => mergedColumns[index].width}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 40}
        width={tableWidth}
        wrap={true}
        justify="center"
        align="middle"
      >
        {({ columnIndex, rowIndex, style }) => (
          <div className={styles.virtualTable__cell} style={style}>
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className={styles.virtualTable}
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
}

export default VirtualTable;
