package com.backend.serviceImpl;

import com.backend.entity.Event;
import com.backend.repository.EventRepository;
import com.backend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
}
