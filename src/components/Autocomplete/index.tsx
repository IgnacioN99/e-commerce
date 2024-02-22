import {AutoComplete as AutoCompleteAntd, type AutoCompleteProps} from "antd";

const Autocomplete = (props: AutoCompleteProps): JSX.Element => {
  return <AutoCompleteAntd {...props} />;
};

export default Autocomplete;
