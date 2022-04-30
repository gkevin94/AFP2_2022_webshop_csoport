package com.cafebabes.cafebabeswebshop.image;

import org.springframework.http.MediaType;

public class Image {

    private long id;
    private byte[] fileBytes;
    private MediaType mediaType;
    private String fileName;
    private long productId;

    public Image() {
    }

    public Image(long id, byte[] fileBytes, MediaType mediaType, String fileName, long productId) {
        this.id = id;
        this.fileBytes = fileBytes;
        this.mediaType = mediaType;
        this.fileName = fileName;
        this.productId = productId;
    }
}
