import {Table as TableAnt, type TableProps} from "antd";

function Table<T extends object>(props: TableProps<T>) {
  return <TableAnt {...props} />;
}

export default Table;
