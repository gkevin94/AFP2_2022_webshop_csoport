package com.cafebabes.cafebabeswebshop.product;

public class Product {

    private long id;
    private String code;
    private String address;
    private String name;
    private String manufacture;
    private int price;
    private String productStatus;

    public Product() {
    }

    public Product(String address, String name, String manufacture, int price) {
        this.address = address;
        this.name = name;
        this.manufacture = manufacture;
        this.price = price;
    }

    public Product(String address, String name, String manufacture, int price, String productStatus) {
        this(address, name, manufacture, price);
        this.productStatus = productStatus;
    }

    public Product(long id, String code, String address, String name, String manufacture, int price, String productStatus/*, Category category*/) {
        this(address, name, manufacture, price);
        this.id = id;
        this.code = code;
        this.productStatus = productStatus;
        //this.category = category;
    }

}
