package com.cafebabes.cafebabeswebshop.product;

public class ProductValidator {

    public boolean isValid(String str) {
        return (str != null && !str.trim().equals(""));
    }
}
