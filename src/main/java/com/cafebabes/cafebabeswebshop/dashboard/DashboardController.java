package com.cafebabes.cafebabeswebshop.dashboard;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    private DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }
}
