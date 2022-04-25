package com.cafebabes.cafebabeswebshop.product;

import com.cafebabes.cafebabeswebshop.category.Category;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
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

    public long saveProductAndGetId(Product product) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement("INSERT INTO products (code, address, name,  manufacture, price, product_status, category_id) " +
                            "VALUES (?,?,?,?,?,?,(SELECT id FROM category WHERE name=?))",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, product.getCode());
            ps.setString(2, product.getAddress());
            ps.setString(3, product.getName());
            ps.setString(4, product.getManufacture());
            ps.setDouble(5, product.getPrice());
            ps.setString(6, "ACTIVE");
            ps.setString(7, product.getCategory().getName());
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateProduct(long id, Product product) {
        jdbcTemplate.update("UPDATE products SET code = ?, address = ?, name = ?, manufacture = ?, price = ?, " +
                        "category_id = (SELECT id FROM category WHERE name=?) WHERE id = ?",
                product.getCode(),
                product.getAddress(),
                product.getName(),
                product.getManufacture(),
                product.getPrice(),
                product.getCategory().getName(),
                id);
    }

    public List<Product> getProductsWithStartAndSize(int start, int size) {
        return jdbcTemplate.query(SQL_SELECT_ALL_JOIN_CATEGORY +
                        "WHERE product_status = 'ACTIVE' ORDER BY category.ordinal, products.name, manufacture LIMIT ? OFFSET ?",
                PRODUCT_ROW_MAPPER,
                size,
                start
        );
    }

    public List<Product> getProductsWithStartAndSizeAndCategory(int start, int size, Category category) {
        return jdbcTemplate.query(SQL_SELECT_ALL_JOIN_CATEGORY +
                        "WHERE product_status = 'ACTIVE' AND category.name = ? ORDER BY category.ordinal, products.name, manufacture LIMIT ? OFFSET ?",
                PRODUCT_ROW_MAPPER,
                category.getName(),
                size,
                start
        );
    }

    public void deleteProduct(long id) {
        jdbcTemplate.update("UPDATE products SET product_status = 'DELETED' WHERE id = ?", id);
    }
}
