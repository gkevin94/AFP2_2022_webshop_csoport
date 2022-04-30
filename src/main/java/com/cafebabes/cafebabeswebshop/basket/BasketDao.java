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

    public BasketItem getBasketItem(BasketItem basketItem) {
        return jdbcTemplate.queryForObject(
                "SELECT product_id, basket.id, products.name, products.address, products.price, pieces FROM basket \n" +
                        "JOIN products ON basket.product_id=products.id \n" +
                        "JOIN users ON basket.user_id=users.id \n" +
                        "WHERE users.user_name = ? and products.address = ?",
                BASKETITEM_ROW_MAPPER,
                basketItem.getUsername(), basketItem.getAddress());
    }

    public void updateBasketItemPieces(BasketItem basketItem) {
        jdbcTemplate.update("UPDATE basket SET pieces = ? WHERE product_id = (SELECT id FROM products WHERE address = ?) AND user_id = (SELECT id FROM users WHERE user_name = ?)",
                basketItem.getPieces(), basketItem.getAddress(), basketItem.getUsername());
    }
}
