package com.emergency.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emergency.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // ✅ Login support
    User findByEmail(String email);

    // 🔥 Better (recommended for your project)
    User findByEmailAndPassword(String email, String password);
}