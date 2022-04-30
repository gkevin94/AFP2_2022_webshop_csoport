package com.cafebabes.cafebabeswebshop.image;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {

    private ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }
}
