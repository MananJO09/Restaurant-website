// Function to get the menu from the JSON file
function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        // Show the menu items to the user
        console.log('Menu:', data);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }
  
  // Function to take the user's order
  function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Randomly select 3 burgers and add them to the order
        const burgers = ['Burger 1', 'Burger 2', 'Burger 3'];
        const order = {
          burgers: burgers
        };
  
        resolve(order);
      }, 2500);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Resolve with order status as true and paid as false
        resolve({
          order_status: true,
          paid: false
        });
      }, 1500);
    });
  }
  
  // Function for paying the order
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Resolve with order status as true and paid as true
        resolve({
          order_status: true,
          paid: true
        });
      }, 1000);
    });
  }
  
  // Function to display the "Thank you" message
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Main function to handle promises and execute the flow
  async function restaurantFlow() {
    try {
      getMenu(); // Get the menu on page load
  
      const order = await takeOrder();
      console.log('Order:', order);
  
      const orderStatus = await orderPrep();
      console.log('Order Status:', orderStatus);
  
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
  
      thankyouFnc();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Run the restaurant flow
  restaurantFlow();
// Function to get the menu from the JSON file
function getMenu() {
  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      // Show the menu items to the user
      console.log('Menu:', data);
    })
    .catch(error => {
      console.error('Error fetching menu:', error);
    });
}

// Function to take the user's order
function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Randomly select 3 burgers and add them to the order
      const burgers = ['Burger 1', 'Burger 2', 'Burger 3'];
      const order = {
        burgers: burgers
      };

      resolve(order);
    }, 2500);
  });
}

// Function for order preparation
function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolve with order status as true and paid as false
      resolve({
        order_status: true,
        paid: false
      });
    }, 1500);
  });
}

// Function for paying the order
function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolve with order status as true and paid as true
      resolve({
        order_status: true,
        paid: true
      });
    }, 1000);
  });
}

// Function to display the "Thank you" message
function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// Main function to handle promises and execute the flow
async function restaurantFlow() {
  try {
    getMenu(); // Get the menu on page load

    const order = await takeOrder();
    console.log('Order:', order);

    const orderStatus = await orderPrep();
    console.log('Order Status:', orderStatus);

    const paymentStatus = await payOrder();
    console.log('Payment Status:', paymentStatus);

    thankyouFnc();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the restaurant flow
restaurantFlow();
  