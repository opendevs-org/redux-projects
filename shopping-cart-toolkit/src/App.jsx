import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
