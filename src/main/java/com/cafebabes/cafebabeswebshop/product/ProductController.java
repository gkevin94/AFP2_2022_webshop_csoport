package com.cafebabes.cafebabeswebshop.product;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private ProductService productService;
    private ProductValidator validator;

    public ProductController(ProductService productService) {
        this.productService = productService;
        this.validator = new ProductValidator();
    }
}
