const array = () => {
  // * Task 1
  const shoppingList = [
    {
      name: 'Apples',
      quantity: 3,
      purchased: false,
      pricePerUnit: 25,
    },
    {
      name: 'Milk',
      quantity: 1,
      purchased: true,
      pricePerUnit: 35,
    },
    {
      name: 'Bread',
      quantity: 2,
      purchased: false,
      pricePerUnit: 30,
    },
    {
      name: 'Butter',
      quantity: 1,
      purchased: true,
      pricePerUnit: 80,
    },
  ];

  // Функція для виводу не куплених продуктів в початок списку
  function checkPurchased(list) {
    const unpurchasedItems = list.filter((item) => !item.purchased);
    const purchasedItems = list.filter((item) => item.purchased);

    return [
      ...unpurchasedItems.map((item) => ({ ...item, purchased: false })),
      ...purchasedItems.map((item) => ({ ...item, purchased: true })),
    ];
  }

  const updatedShoppingList = checkPurchased(shoppingList);
  console.log(updatedShoppingList);

  // Функція приймає назву продукту і відзначає його як придбаний
  const purchaseProduct = (productName) =>
    shoppingList.map((item) => {
      if (item.name === productName) {
        return { ...item, purchased: true };
      }
      return item;
    });

  console.log(purchaseProduct('Bread'));

  // Видалення продукту зі списку
  const removeProduct = (productName) =>
    shoppingList.filter((item) => item.name !== productName);

  const removedProductList = removeProduct('Oranges');
  console.log(removedProductList);

  // Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку
  const calculateTotalPrice = (list) => {
    let total = 0;
    list.forEach((item) => {
      total += item.pricePerUnit * item.quantity;
    });
    return total;
  };

  const totalPrice = calculateTotalPrice(shoppingList);
  console.log(`Sum: ${totalPrice}`);

  // Підрахунок суми всіх (не) придбаних продуктів
  const calculateTotalUnpurchasedPrice = (list) => {
    let total = 0;
    list.forEach((item) => {
      if (!item.purchased) {
        total += item.pricePerUnit * item.quantity;
      }
    });
    return total;
  };

  const totalUnpurchasedPrice = calculateTotalUnpurchasedPrice(shoppingList);

  console.log(`Sum of unbought: ${totalUnpurchasedPrice}`);

  // Показання продуктів в залежності від суми
  const sorting = (arg) => {

    const sortedList = [...shoppingList];

    if (arg === 'asc') {
      return sortedList.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
    } else if (arg === 'desc') {
      return sortedList.sort((a, b) => b.pricePerUnit - a.pricePerUnit);
    } else {
      return 'Error';
    }
  };
  console.log(sorting('asc'));
  console.log(sorting('desc'));
};

export default array;
