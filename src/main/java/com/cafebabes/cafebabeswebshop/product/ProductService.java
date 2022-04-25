package com.cafebabes.cafebabeswebshop.product;

import com.cafebabes.cafebabeswebshop.category.Category;
import com.cafebabes.cafebabeswebshop.category.CategoryDao;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductDao productDao;
    private CategoryDao categoryDao;

    public Product getProduct(String address) {
        return productDao.getProduct(address);
    }

    public List<Product> getProducts() {
        return productDao.getProducts();
    }

    public long saveProductAndGetId(Product product) {
        for (Category category : categoryDao.listCategories()) {
            if (category.getName().equals(product.getCategory().getName()))
                return productDao.saveProductAndGetId(product);
        }
        categoryDao.createCategoryAndGetId(product.getCategory());
        return productDao.saveProductAndGetId(product);
    }

    public void updateProducts(long id, Product product) {
        productDao.updateProduct(id, product);
    }

    public List<Product> getProductsWithStartAndSize(int start, int size) {
        return productDao.getProductsWithStartAndSize(start, size);
    }
}
