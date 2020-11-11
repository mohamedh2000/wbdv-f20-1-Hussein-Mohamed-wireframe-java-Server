package com.example.homework1.controllers;

import com.example.homework1.models.Widget;
import com.example.homework1.services.WidgetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
  @Autowired
  WidgetService service;

  @GetMapping("/api/topics/{tid}/widgets")
  public List<Widget> findWidgetsForTopic(@PathVariable("tid") String topicId) {
    return service.findWidgetsForTopic(topicId);
  }

  @PostMapping("/api/topics/{tid}/widgets")
  public Widget createWidget(@PathVariable("tid") String topicId, @RequestBody Widget widget) {
    return service.createWidget(topicId, widget);
  }

  @GetMapping("/api/widgets")
  public List<Widget> findAllWidgets() {
    return service.findAllWidgets();
  }

  @DeleteMapping("/api/widgets/{wid}")
  public void deleteWidget (@PathVariable("wid") Integer wid) {
    service.deleteWidget(wid);
  }

  @PutMapping("/api/widgets/{wid}")
  public Widget updateWidget(@PathVariable("wid") Integer widgetId,
                              @RequestBody Widget updatedWidget) {
    return service.updateWidget(widgetId, updatedWidget);
  }
  //TODO: deleteWidget(), updateWidget
}