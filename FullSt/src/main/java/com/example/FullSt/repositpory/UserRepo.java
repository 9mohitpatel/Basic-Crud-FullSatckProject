package com.example.FullSt.repositpory;

import com.example.FullSt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User, Long> {

}
