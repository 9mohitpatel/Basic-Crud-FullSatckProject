package com.example.FullSt.controller;

import com.example.FullSt.entity.User;
import com.example.FullSt.exception.UserNotFoundException;
import com.example.FullSt.repositpory.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class USerController{

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        return userRepo.save(newUser);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @PutMapping("/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepo.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setEmail(newUser.getEmail());
            user.setName(newUser.getName());
            return userRepo.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
    @DeleteMapping("/{id}")
    String deleteUserById(@PathVariable Long id) {
        if(!userRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "user with id " + id + " was deleted";
    }

}
