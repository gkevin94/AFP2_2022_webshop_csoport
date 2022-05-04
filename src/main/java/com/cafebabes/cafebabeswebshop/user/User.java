package com.training360.cafebabeswebshop.user;

public class User {

    private long id;
    private String name;
    private String email;
    private String userName;
    private String password;
    private int enabled;
    private String role;
    private String userStatus;

    public User() {
    }

    public User(int enabled, String role) {
        this.enabled = enabled;
        this.role = role;
    }

    public User(String userName, int enabled, String role) {
        this.userName = userName;
        this.enabled = enabled;
        this.role = role;
    }

    public User(long id, String name, String userName, int enabled, String role) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.enabled = enabled;
        this.role = role;
    }

    public User(long id, String name, String email, String userName, String password, int enabled, String role, String userStatus) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.enabled = enabled;
        this.role = role;
        this.userStatus = userStatus;
    }