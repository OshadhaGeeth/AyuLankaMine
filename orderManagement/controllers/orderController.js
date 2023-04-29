const { response } = require("express");
const OrderService = require("../services/orderService");
const DeliveryService = require("../services/deliveryService");

//controller for view Order
module.exports.viewOrderController = async (req, res) => {
    try {
      let serviceResponse = await OrderService.viewOrderService(req);
      if ((serviceResponse.msg = "success")) {
        // return serviceResponse
        return res.status(200).send({
          message: "Order details retrieved",
          data: serviceResponse.data,
        });
      } else {
        return res.status(300).send({ message: "Cannot view Orders!" });
      }
    } catch (err) {
      return res
        .status(300)
        .send({ message: "Cannot view Orders !", err: err.message });
    }
  };


// controller for update Order
module.exports.updateOrderController = async(req,res) => {
    try {
        let serviceResponse = await OrderService.updateOrderService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "Delivery details updated...!",
            });
        } else {
            return res.status(300).send({message: "Cannot update buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot update buyers...!", err: err.message});
    }
};



// controller for delete
module.exports.deleteOrderController = async(req,res) =>{
  try {
      let serviceResponse = await OrderService.deleteOrderService(req);
      if ((serviceResponse.msg = "success")) {
          // return service respose
          return res.status(200).send({
              message: "details deleted...!",
          });
      } else {
          return res.status(300).send({message: "Cannot delete...!"});
      }
  } catch (err) {
      return res.status(300).send({message: "Cannot delete...!", err: err.message});
  }
};

//------------------------------------------------------------------------
//controller for view deliveries
module.exports.viewDeliveryController = async (req, res) => {
    try {
      let serviceResponse = await DeliveryService.viewDeliveryService(req);
      if ((serviceResponse.msg = "success")) {
        // return serviceResponse
        return res.status(200).send({
          message: "Delivery details retrieved",
          data: serviceResponse.data,
        });
      } else {
        return res.status(300).send({ message: "Cannot view Delivery!" });
      }
    } catch (err) {
      return res
        .status(300)
        .send({ message: "Cannot view Delivery !", err: err.message });
    }
  }


// controller for update delivery
module.exports.updateDeliveryController = async(req,res) => {
    try {
        let serviceResponse = await DeliveryService.updateDeliveryService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "Delivery details updated...!",
            });
        } else {
            return res.status(300).send({message: "Cannot update buyer...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot update buyers...!", err: err.message});
    }
};


// controller for delete
module.exports.deleteDeliveryController = async(req,res) =>{
    try {
        let serviceResponse = await DeliveryService.deleteDeliveryService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "details deleted...!",
            });
        } else {
            return res.status(300).send({message: "Cannot delete...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot delete...!", err: err.message});
    }
}