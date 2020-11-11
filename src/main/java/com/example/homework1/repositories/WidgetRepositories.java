package com.example.homework1.repositories;

import com.example.homework1.models.Widget;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepositories extends CrudRepository<Widget, Integer> {

  @Query(value = "SELECT * FROM cs4550.widgets WHERE topic_id=:tid", nativeQuery = true)
  List<Widget> findWidgetsByTopic(@Param("tid") String topicId);

}
