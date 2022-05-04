package com.training360.cafebabeswebshop.user;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class UserDao {

    private static final RowMapper<com.training360.cafebabeswebshop.user.User> USER_ROW_MAPPER = ((rs, i) -> new com.training360.cafebabeswebshop.user.User(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("email"),
            rs.getString("user_name"),
            rs.getString("password"),
            rs.getInt("enabled"),
            rs.getString("role"),
            rs.getString("user_status")));
    private JdbcTemplate jdbcTemplate;

    public UserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<com.training360.cafebabeswebshop.user.User> listUsers() {
        return jdbcTemplate.query("SELECT id, name, email, user_name, password, enabled, role, user_status FROM users", USER_ROW_MAPPER);
    }

    public void deleteUserById(long id) {
        jdbcTemplate.update("UPDATE orders SET user_id = NULL WHERE user_id = ?", id);
        jdbcTemplate.update("UPDATE basket SET user_id = NULL WHERE user_id = ?", id);
        jdbcTemplate.update("DELETE FROM users WHERE id = ?", id);
    }
