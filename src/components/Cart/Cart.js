import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  CartDiv,
  DropdownCart,
  DropdownCartProducts,
  CartDisplay,
  CartProductsUl,
  ProductCard,
  QuantityController,
  ProductDetails,
  Cover,
  SubTotal,
} from "./Cart.style";
import { CartContext } from "../../contexts/cart.context";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const { cartChange, setCartChange, cartVisibility, setCartVisibility } =
    useContext(CartContext);

  useEffect(() => {
    async function getCartData() {
      const getConfig = {
        headers: {
          authorization: `Bearer c412a0b7-766c-4111-9f8c-176fa043c865`,
        },
      };
      try {
        const response = await axios.get(
          "https://tiamonka.onrender.com/cart",
          getConfig
        );
        setCartList(response.data);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    }

    getCartData();
  }, [cartChange]);

  const changeQuantity = async (type, objId, previousQuantity) => {
    const putData = {
      changeType: type,
      entryId: objId,
      previousQuantity: previousQuantity,
    };

    const putConfig = {
      headers: {
        Authorization: `Bearer c412a0b7-766c-4111-9f8c-176fa043c865`,
      },
    };

    await axios.put("https://tiamonka.onrender.com/cart", putData, putConfig);

    setCartChange(!cartChange);
  };

  const GetSubTotal = () => {
    let sum = 0;
    cartList.forEach((obj) => {
      sum += Number(obj.price.replace(",", ".")) * Number(obj.quantity);
    });

    return (
      <SubTotal>
        <p>Subtotal</p>
        <p>R$ {sum.toFixed(2).toString().replace(".", ",")}</p>
        <button>Finalizar pedido</button>
      </SubTotal>
    );
  };

  return (
    <>
      <DropdownCart>
        <CartDiv>
          <button
            onClick={() => {
              setCartVisibility(!cartVisibility);
            }}
          >
            Carrinho
          </button>
          <ion-icon name="cart-outline"></ion-icon>
        </CartDiv>
        <DropdownCartProducts cartVisibility={cartVisibility}>
          <Cover
            onClick={(event) => {
              event.preventDefault();
              setCartVisibility(!cartVisibility);
            }}
          />
          <CartDisplay cartVisibility={cartVisibility}>
            <h4>Carrinho</h4>
            <GetSubTotal />
            <CartProductsUl>
              {cartList.map((obj, index) => {
                return (
                  <ProductCard key={index}>
                    <img src={obj.image} />
                    <ProductDetails>
                      <p>{obj.productName}</p>
                      <QuantityController>
                        <button
                          onClick={() =>
                            changeQuantity("decrease", obj._id, obj.quantity)
                          }
                        >
                          -
                        </button>
                        <p>{obj.quantity}</p>
                        <button
                          onClick={() =>
                            changeQuantity("increase", obj._id, obj.quantity)
                          }
                        >
                          +
                        </button>

                        <p>
                          Preço: R$
                          {(
                            Number(obj.price.replace(",", ".")) *
                            Number(obj.quantity)
                          )
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                        </p>
                      </QuantityController>
                    </ProductDetails>
                  </ProductCard>
                );
              })}
            </CartProductsUl>
          </CartDisplay>
        </DropdownCartProducts>
      </DropdownCart>
    </>
  );
};

export default Cart;
