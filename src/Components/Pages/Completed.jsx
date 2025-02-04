import "../../style/style.scss";
import Cart from "../Cart/Cart";
import { NotesContext } from "../../Context/NotesProvider";
import NotFound from "../NotFound/NotFound";
import { useContext, useEffect, useState } from "react";

const Complete = () => {
  const { notes, setIsModal, setIsModalDel } = useContext(NotesContext);
  const [dataCart, setDataCart] = useState([]);

  useEffect(() => {
    if (notes) {
      setDataCart(notes.filter((cart) => cart.isCompleted == true));
    }
  }, [notes]);

  return dataCart.length > 0 ? (
    <div className="cart_row">
      {dataCart.map((cart, id) =>
        cart.isCompleted == true ? (
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

export default Complete;
