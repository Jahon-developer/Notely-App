import { useContext, useEffect, useState } from "react";
import "../../style/style.scss";
import Cart from "../Cart/Cart";
import { NotesContext } from "../../Context/NotesProvider";
import NotFound from "../NotFound/NotFound";

const Home = () => {
  const { notes, setIsModal, setIsModalDel } = useContext(NotesContext);
  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    if (notes) {
      setDataCart(notes.filter((cart) => cart.category == "Home"));
    }
  }, [notes]);

  return dataCart.length > 0 ? (
    <div className="cart_row">
      {dataCart.map((cart, id) =>
        cart.category == "Home" ? (
          <Cart
            setIsModal={setIsModal}
            setIsModalDel={setIsModalDel}
            key={id}
            isCompleted={cart.isCompleted}
            title={cart.title}
            description={cart.description}
            date={cart.updateAt}
            category={cart.category}
            id={cart.documentId}
          />
        ) : null
      )}
    </div>
  ) : (
    <NotFound />
  );
};

export default Home;

