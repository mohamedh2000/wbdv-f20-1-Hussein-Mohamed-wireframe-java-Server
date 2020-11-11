package com.example.homework1.controllers;

import com.example.homework1.models.Message;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRestController {
  @GetMapping("/hello")
  public String sayHello() {
    return "Hello Word!";
  }

  @GetMapping("/message")
  public Message getMessage() {
    Message m = new Message();
    m.setMessage("Life is Good!!!");
    return m;
  }

  @GetMapping("/add/{paramA}/{paramB}")
  public Integer addIntegers(@PathVariable("paramA") Integer a,
                             @PathVariable("paramB") Integer b) {
    return a + b;
  }

  //add?paramA=2&paramB=3
  @GetMapping("/add")
  public Integer addIntegers2(@RequestParam("paramA") Integer a,
                              @RequestParam("paramB") Integer b) {
    return a + b;
  }
}
