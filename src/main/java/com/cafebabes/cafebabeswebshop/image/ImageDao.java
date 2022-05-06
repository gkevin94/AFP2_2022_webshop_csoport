package com.cafebabes.cafebabeswebshop.image;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Repository
public class ImageDao {

    private static final RowMapper<Image> IMAGE_ROW_MAPPER = ((rs, i) -> new Image(
            rs.getLong("id"),
            rs.getBytes("image_file"),
            MediaType.parseMediaType(rs.getString("file_type")),
            rs.getString("file_name"),
            rs.getLong("product_id")
    ));

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

    public Image getImage(long productId, long offset) {
        return jdbcTemplate.queryForObject("SELECT id, image_file, file_type, file_name, product_id FROM images WHERE product_id = ? LIMIT 1 OFFSET ?",
                IMAGE_ROW_MAPPER, productId, offset);
    }

    public int deleteImage(long productId, long offset) {
        return jdbcTemplate.update("DELETE FROM images WHERE id = (SELECT id FROM (SELECT id FROM images WHERE product_id = ? LIMIT 1 OFFSET ?) x)", productId, offset);
    }
}
