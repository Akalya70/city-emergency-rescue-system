package com.emergency.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emergency.model.User;
import com.emergency.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User register(User user) {

        // Auto generate User ID
        user.setUserId("USER-" + System.currentTimeMillis());

        // Default role
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("CITIZEN");
        }

        return userRepository.save(user);
    }

    // Login User
    public User login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    // Get All Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}