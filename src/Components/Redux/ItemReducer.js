

//  const item =  {shoppingCart: [], totalPrice: 0, qty: 0}

 const ItemReducer = (state = {shoppingCart: [], totalPrice: 0, qty: 0},action) =>{
     const {shoppingCart,totalPrice,qty} = state;
     let updatedPrice;
     let updatedQty;
     let product;
     let item;
    switch(action.type){
        case 'ADD_TO_CART' :
            const check = shoppingCart.find(cart => cart.id === action.id);
            if(check){
                check.qty = check.qty + 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + check.Price;
                return {shoppingCart : [...shoppingCart],totalPrice : updatedPrice,qty : updatedQty}
            }
            else{
                product = action.products.find(product => product.id === action.id);
                console.log(product.Price)
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.Price;
              console.log(action.products)
                return {shoppingCart : [product,...shoppingCart], totalPrice : updatedPrice, qty : updatedQty};
            }
            case 'INC' :
                product = shoppingCart.find(product => product.id === action.id);
                product.qty = product.qty + 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.Price;
                return {shoppingCart : [...shoppingCart],totalPrice : updatedPrice, qty : updatedQty}
            case 'DEC':
                product = shoppingCart.find(product => product.id === action.id)
                product.qty = product.qty - 1;
                updatedQty = qty - 1;
                updatedPrice = totalPrice - product.price;
                return {shoppingCart : [...shoppingCart],totalPrice : updatedPrice, qty : updatedQty}

                case 'ADD_TO_ITEM' :
                    const checkItem = shoppingCart.find(cart => cart.id === action.id);
                    if(checkItem){
                        checkItem.qty = checkItem.qty + action.value;
                        updatedQty = qty + action.value;
                        updatedPrice = totalPrice + checkItem.Price;
                        return {shoppingCart : [...shoppingCart],totalPrice : updatedPrice,qty : updatedQty}
                    }
                    else{
                        product = action.products.find(product => product.id === action.id);
                        product['qty'] = action.value;
                        updatedQty = qty + action.value;
                        updatedPrice = totalPrice + (product.Price * action.value);
                      console.log(action.products)
                        return {shoppingCart : [product,...shoppingCart], totalPrice : updatedPrice, qty : updatedQty};
                    }
                    case 'DELETE' : {
                       const filtered = shoppingCart.filter(item => item.id !== action.id);
                       product = shoppingCart.find(cart => cart.id === action.id);
                       updatedPrice = totalPrice - product.Price * product.qty;
                       updatedQty = qty - product.qty;
                       return {shoppingCart : [...filtered], totalPrice : updatedPrice, qty : updatedQty}

                    }
        default :
        return state;
    }
}
export default ItemReducer;