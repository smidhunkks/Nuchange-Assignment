import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

toast.configure();

function App() {
  const itemlist = [
    {
      name: "Potato",

      id: 1,

      price: 30,

      available: 1,

      vendor: "Himachal Pvt Ltd",

      category: "Vegtables",
    },

    {
      name: "Banana",

      id: 2,

      price: 50,

      available: 1,

      category: "Fruits",

      vendor: "Organic farms",
    },

    {
      name: "Drumsticks",

      id: 3,

      price: 20,

      available: 0,

      category: "Vegetables",

      vendor: "Mallikarjuna farms",
    },

    {
      name: "Orange",

      id: 4,

      price: 25,

      available: 1,

      vendor: "Nagpur farms",

      category: "Fruits",
    },
  ];

  const [cart, setcart] = useState([]);
  const [modal_state, setmodal_state] = useState(false);
  const [Total, setTotal] = useState(0);

  const onchange = (props) => {
    setcart(props);
  };

  const onOpenModal = (props) => {
    setmodal_state(true);
  };

  const onCloseModal = (props) => {
    setmodal_state(false);
  };


  const Addtocart = (props) => {
    if (!cart.includes(props)) {
      cart.push({ ...props, quantity: 1 });
      setcart(cart);
      toast.info(`added ${props.name} to cart`);
      console.log(cart);
    } else {
      toast(`Item already in cart`);
    }
  };


  useEffect(() => {
    cart.forEach((obj) => {
      Total += obj.quantity * obj.price;
      setTotal(Total);
      console.log(Total);
    });
  }, [Total]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar modal_show={onOpenModal} />
      </header>
      <Modal open={modal_state} onClose={onCloseModal}>
        <div className="modalwrap">
          <h2>Your Cart</h2>
          {cart.length
            ? cart.map((obj, index) => {
                return (
                  <div className="modal-item">
                    <div className="modal-name">{obj.name}</div>
                    <div className="modal-quant">
                      <input
                        type="text"
                        name="quant"
                        id="quant"
                        value={obj.quantity}
                        maxLength="3"
                        onChange={(e) => {
                          if (e.target.value) {
                            obj.quantity = e.target.value;
                            cart[index].quantity = e.target.value;
                            onchange(cart);
                          }
                        }}
                        onBlur={() => {
                          if (cart[index].quantity) {
                            onchange(cart);
                          } else {
                            cart[index].quantity = 1;
                            onchange(cart);
                          }

                          console.log(cart);
                        }}
                      />
                      Kg
                    </div>
                    <div className="modal-price">₹{obj.price}</div>
                    <div className="modal-item-close">X</div>
                  </div>
                );
              })
            : "Your cart is Empty"}

          <div className="modal-bottom">
            <div className="cart-total">
              <p className="price-total">Total</p>

              <p className="price-number">₹{Total}</p>
            </div>
            <button className="cart-purchase">Purchase</button>
          </div>
        </div>
      </Modal>
      <select>
        <option value="None">None</option>
        <option value="Vegetables">Vegetables</option>
        <option value="">Fruits</option>
      </select>
      <div className="item-list-wrap">
        <div className="item-list">
          
          {itemlist.map((obj, index) => (
            <Cards key={index} onclick={Addtocart} data={obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
