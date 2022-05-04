package com.training360.cafebabeswebshop.user;

import com.training360.cafebabeswebshop.product.ResultStatus;
import com.training360.cafebabeswebshop.product.ResultStatusEnum;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
public class UserController {

    private UserService userService;

    private UserValidator userValidator;

    public UserController(UserService userService) {
        this.userService = userService;
        this.userValidator = new UserValidator(userService);
    }
