import Routes from "@config/Routes";
import {RouterProvider} from "react-router";
import "@config/i18n";
import {ConfigProvider} from "antd";
import {theme} from "@config/Theme";
import {ThemeProvider} from "styled-components";

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Routes} />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
