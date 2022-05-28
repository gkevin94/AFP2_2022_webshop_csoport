package com.cafebabes.cafebabeswebshop.dashboard;

import com.cafebabes.cafebabeswebshop.order.OrderDao;
import com.cafebabes.cafebabeswebshop.product.ProductDao;
import com.cafebabes.cafebabeswebshop.user.UserDao;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private UserDao userDao;
    private ProductDao productDao;
    private OrderDao orderDao;

    public DashboardService(UserDao userDao, ProductDao productDao, OrderDao orderDao) {
        this.userDao = userDao;
        this.productDao = productDao;
        this.orderDao = orderDao;
    }

    public Dashboard listOfResult(){
        return new Dashboard(userDao.listUsers().size(),
                productDao.listAdviceProducts().size(), productDao.getProducts().size(),
                orderDao.listAllOrders().size(), orderDao.listAllActiveOrders().size());
    }
}
