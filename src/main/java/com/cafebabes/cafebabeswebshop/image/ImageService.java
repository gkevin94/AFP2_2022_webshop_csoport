package com.cafebabes.cafebabeswebshop.image;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
public class ImageService {

    private ImageDao imageDao;

    public ImageService(ImageDao imageDao) {
        this.imageDao = imageDao;
    }

    public void saveImage(Image image) {
        imageDao.saveImage(image);
    }

    public Image getImage(long productId, long offset) {
        try {
            return imageDao.getImage(productId, offset);
        } catch (EmptyResultDataAccessException sql) {
            return null;
        }
    }
}
