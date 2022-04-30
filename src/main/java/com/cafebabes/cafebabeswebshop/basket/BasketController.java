package com.cafebabes.cafebabeswebshop.basket;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasketController {

    private BasketService basketService;

    public BasketController(BasketService basketService) {
        this.basketService = basketService;
    }

    @PostMapping("/basket/{address}")
    public long saveBasketItemAndGetId(@PathVariable String address, @RequestBody BasketItem basketItem, Authentication authentication) {
        return authentication == null ? -1 : basketService.saveBasketItemAndGetId(address, authentication, basketItem);
    }
}
