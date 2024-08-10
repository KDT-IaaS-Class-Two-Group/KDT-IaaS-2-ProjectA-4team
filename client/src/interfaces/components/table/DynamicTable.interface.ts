export default interface DynamicTableProps<T extends object> {
  data: T[];
  renderActions?: (row: T) => React.ReactNode;
}
