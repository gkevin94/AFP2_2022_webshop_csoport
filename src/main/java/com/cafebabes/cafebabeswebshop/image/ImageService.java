package com.cafebabes.cafebabeswebshop.image;

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
}
