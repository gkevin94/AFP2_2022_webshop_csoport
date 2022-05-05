package com.cafebabes.cafebabeswebshop.order;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    private OrderService orderService;
    private OrderValidator validator;

    public OrderController(OrderService orderService, UserService userService, ProductService productService) {
        this.orderService = orderService;
        this.validator = new OrderValidator(orderService, userService, productService);
    }

    @PostMapping("/myorders")
    public ResultStatus saveOrderAndGetId(Authentication authentication, @RequestBody Delivery delivery) {
        try {
            long id = orderService.saveOrderAndGetId(authentication, delivery);
            return new ResultStatus(ResultStatusEnum.OK, String.format("Order successfully created with id %d", id));
        } catch (IllegalStateException | IllegalArgumentException e) {
            return new ResultStatus(ResultStatusEnum.NOT_OK, e.getMessage());
        }
    }

}
