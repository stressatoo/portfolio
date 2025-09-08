export type Route = {
  path?: string;
  index?: boolean;
  Component?: React.ComponentType;
  children?: Route[];
  label?: string;
  showInNav?: boolean;
};
