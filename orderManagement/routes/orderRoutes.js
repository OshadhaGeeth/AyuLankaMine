const router = require("express").Router();
const OrderController = require("../controllers/orderController");
const DeliveryController = require("../controllers/deliveryController");


//route for view Product
router.route("/view").get((req, res) => {
    const response = OrderController.viewOrderController(
      req.body.data,
      res
    );
  });


// route for update selected order using id
router.route("/updateOrder/:id").post((req,res) => {
  console.log("request to update", req)
  let id = req.params.id;
  let updateOrder = {
      id: id,
      body: req.body,
  };

  const response = OrderController.updateOrderController(updateOrder, res);
});


// route for delete order using id
router.route("/deleteOrder").delete((req,res)=>{
  console.log("delete order", req);
  let id = req.body._id;
  let deleteOrder = {
      id:id,
      body: req.body,
  };

  const response = OrderController.deleteOrderController(deleteOrder,res);
})


//----------------------------------------------------------------------------
//route for view Delivery
router.route("/view").get((req, res) => {
  const response = DeliveryController.viewDeliveryController(
    req.body.data,
    res
  );
});


// route for update selected buyer using id
router.route("/updateDelivery/:id").post((req,res) => {
  console.log("request to update", req)
  let id = req.params.id;
  let updateDelivery = {
      id: id,
      body: req.body,
  };

  const response = DeliveryController.updateDeliveryController(updateDelivery, res);
});


// route for delete delivery using id
router.route("/deleteDelivery").delete((req,res)=>{
  console.log("delete delivery", req);
  let id = req.body._id;
  let deleteDelivery = {
      id:id,
      body: req.body,
  };

  const response = DeliveryController.deleteDeliveryController(deleteDelivery,res);
})

module.exports = router;