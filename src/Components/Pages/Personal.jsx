import Cart from "../Cart/Cart";
import "../../style/style.scss";
import { useContext, useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";
import { NotesContext } from "../../Context/NotesProvider";

const Personal = () => {
  const { notes, setIsModal, setIsModalDel } = useContext(NotesContext);
  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    if (notes) {
      setDataCart(notes.filter((cart) => cart.category == "Personal"));
    }
  }, [notes]);

  return dataCart.length > 0 ? (
    <div className="cart_row">
      {dataCart.map((cart, id) =>
        cart.category == "Personal" ? (
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

export default Personal;
