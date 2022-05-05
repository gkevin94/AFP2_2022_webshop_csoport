package com.cafebabes.cafebabeswebshop.order;

import java.time.LocalDateTime;
import java.util.List;

public class Order {

    private long id;
    private LocalDateTime purchaseDate;
    private long userId;
    private long total;
    private long sumQuantity;
    private OrderStatus orderStatus;
    private com.cafebabes.cafebabeswebshop.delivery.Delivery delivery;
    private List<OrderedProduct> orderedProducts;

    public Order() {
    }

    public Order(long id, long userId, long total, long sumQuantity, String status) {
        this(id, LocalDateTime.now(), userId, total, sumQuantity, status);
    }

    public Order(long id, LocalDateTime purchaseDate, long userId, long total, long sumQuantity, String status) {
        this.id = id;
        this.purchaseDate = purchaseDate;
        this.userId = userId;
        this.total = total;
        this.sumQuantity = sumQuantity;
        this.orderStatus = OrderStatus.valueOf(status);
    }

    public Order(long id, LocalDateTime purchaseDate, long userId, long total, long sumQuantity, String orderStatus, com.cafebabes.cafebabeswebshop.delivery.Delivery delivery) {
        this(id, purchaseDate, userId, total, sumQuantity, orderStatus);
        this.delivery = delivery;
    }

}
