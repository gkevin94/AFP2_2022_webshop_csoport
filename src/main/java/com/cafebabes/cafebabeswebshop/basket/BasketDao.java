package com.cafebabes.cafebabeswebshop.basket;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class BasketDao {

    private JdbcTemplate jdbcTemplate;

    public BasketDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
}
