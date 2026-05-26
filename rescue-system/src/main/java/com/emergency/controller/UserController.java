package com.emergency.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emergency.model.User;
import com.emergency.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    // ✅ Register user
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    // ✅ Login user (safe handling added)
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User foundUser = userService.login(user.getEmail(), user.getPassword());

        if (foundUser == null) {
            throw new RuntimeException("Invalid email or password");
        }

        return foundUser;
    }

    // ✅ Get all users (Admin feature)
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}