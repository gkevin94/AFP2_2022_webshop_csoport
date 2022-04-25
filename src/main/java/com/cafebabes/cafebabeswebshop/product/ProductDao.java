package com.cafebabes.cafebabeswebshop.product;

import com.cafebabes.cafebabeswebshop.category.Category;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDao {

    private JdbcTemplate jdbcTemplate;

    private static final RowMapper<Product> PRODUCT_ROW_MAPPER = ((resultSet, i) -> new Product(
            resultSet.getLong("id"),
            resultSet.getString("code"),
            resultSet.getString("address"),
            resultSet.getString("name"),
            resultSet.getString("manufacture"),
            resultSet.getInt("price"),
            resultSet.getString("product_status"),
            new Category(
                    resultSet.getLong("category_id"),
                    resultSet.getString("category.name"),
                    resultSet.getLong("category.ordinal"))
    ));

    private static final String SQL_SELECT_ALL_JOIN_CATEGORY =
            "SELECT products.id, code, address, products.name, manufacture, price, product_status, category_id, category.name, category.ordinal " +
                    "FROM products LEFT JOIN category ON category_id=category.id ";

    public Product getProduct(String address) {
        try {
            return jdbcTemplate.queryForObject( SQL_SELECT_ALL_JOIN_CATEGORY+
                            "WHERE address = ?",
                    PRODUCT_ROW_MAPPER, address);
        } catch (EmptyResultDataAccessException e) {
            throw new IllegalStateException();
        }
    }

    public List<Product> getProducts() {
        return jdbcTemplate.query(SQL_SELECT_ALL_JOIN_CATEGORY +
                        "WHERE product_status = 'ACTIVE' ORDER BY category.ordinal, products.name, manufacture",
                PRODUCT_ROW_MAPPER);
    }
}
