package com.cafebabes.cafebabeswebshop.product;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductDao productDao;
    //private CategoryDao categoryDao;

    public Product getProduct(String address) {
        return productDao.getProduct(address);
    }

    public List<Product> getProducts() {
        return productDao.getProducts();
    }
}
