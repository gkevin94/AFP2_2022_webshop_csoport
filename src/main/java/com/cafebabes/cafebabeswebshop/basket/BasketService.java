package com.cafebabes.cafebabeswebshop.basket;

import org.springframework.stereotype.Service;

@Service
public class BasketService {

    private BasketDao basketDao;

    public BasketService(BasketDao basketDao) {
        this.basketDao = basketDao;
    }
}
