package com.backend.controller;

import com.backend.entity.Event;
import com.backend.entity.User;
import com.backend.serviceImpl.EventServiceImpl;
import com.backend.serviceImpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {

    private final EventServiceImpl eventService;

    private final UserServiceImpl userService;

    @PostMapping
    public Event createEvent(@RequestBody Event event, @RequestParam Long userId) {
        User user = userService.findById(userId).orElse(null);
        if (user != null) {
            event.setUser(user);
            return eventService.createEvent(event);
        }
        return null;

    }

    @GetMapping
    public List<Event> getAllEvents(@RequestParam Long userId){
        return eventService.getAll(userId);
    }
}