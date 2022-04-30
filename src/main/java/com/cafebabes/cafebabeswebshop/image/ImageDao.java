package com.cafebabes.cafebabeswebshop.image;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Repository
public class ImageDao {

    private JdbcTemplate jdbcTemplate;

    public ImageDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void saveImage(Image image) {
        try {
            jdbcTemplate.update("INSERT INTO images (image_file, file_type, file_name, product_id) VALUES (?, ?, ?, ?);", image.getFileBytes(), image.getMediaType().toString(), image.getFileName(), image.getProductId());

        } catch (DataAccessException daex) {
            throw new IllegalArgumentException("Cannot save image", daex);
        }
    }
}
