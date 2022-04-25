package com.cafebabes.cafebabeswebshop.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ProductController {

    private ProductService productService;
    private ProductValidator validator;

    public ProductController(ProductService productService) {
        this.productService = productService;
        this.validator = new ProductValidator();
    }

    @GetMapping("/product/{address}")
    public Object getProduct(@PathVariable String address) {
        List<String> addresses = productService.getProducts().stream().map(Product::getAddress).collect(Collectors.toList());
        if (validator.isValid(address) && addresses.contains(address)) {
            return productService.getProduct(address);
        } else {
            return new ResultStatus(ResultStatusEnum.NOT_OK, "Invalid address");
        }
    }
}
