package com.cafebabes.cafebabeswebshop.basket;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class BasketDao {

    private JdbcTemplate jdbcTemplate;

    public BasketDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private static final RowMapper<BasketItem> BASKETITEM_ROW_MAPPER = ((resultSet, i) -> new BasketItem(
            resultSet.getLong("product_id"),
            resultSet.getLong("basket.id"),
            resultSet.getString("products.name"),
            resultSet.getString("products.address"),
            resultSet.getInt("products.price"),
            resultSet.getInt("pieces")
    ));


}
