package com.backend.service;


import com.backend.entity.Event;

import java.util.List;

public interface EventService {

    Event createEvent(Event event);

    List<Event> getAll(Long userId);
}
