package com.example.homework1.services;

import com.example.homework1.models.Widget;
import com.example.homework1.repositories.WidgetRepositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {
    @Autowired
    WidgetRepositories widgetRepository;
    List<Widget> widgets = new ArrayList<Widget>();

    public List<Widget> findAllWidgets() {
      return (List<Widget>)widgetRepository.findAll();
    }

    public List<Widget> findWidgetsForTopic(String tid) {
      return widgetRepository.findWidgetsByTopic(tid);
    }

    public Widget createWidget(String topicId, Widget widget) {
      widget.setTopicId(topicId);
      widget =  widgetRepository.save(widget);
      widget.setWidgetOrder(widget.getId());
      return widgetRepository.save(widget);
    }

    public void deleteWidget (Integer widgetId) {
      widgetRepository.deleteById(widgetId);
    }

    //update Widget
    public Widget updateWidget(Integer widgetId, Widget updatedWidget) {
      Widget widget = widgetRepository.findById(widgetId).get();
      widget.setName(updatedWidget.getName());
      widget.setClassName(updatedWidget.getClassName());
      widget.setHeight(updatedWidget.getHeight());
      widget.setWidth(updatedWidget.getWidth());
      widget.setSrc(updatedWidget.getSrc());
      widget.setType(updatedWidget.getType());
      widget.setSize(updatedWidget.getSize());
      widget.setWidgetOrder(updatedWidget.getWidgetOrder());
      widget.setStyle(updatedWidget.getStyle());
      widget.setText(updatedWidget.getText());
      widget.setValue(updatedWidget.getValue());
      return widgetRepository.save(widget);
    }

    //TODO: deleteWidget(), updateWidget
  }
