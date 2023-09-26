package com.backend.serviceImpl;

import com.backend.entity.Conversation;
import com.backend.entity.Course;
import com.backend.entity.Message;
import com.backend.model.ConversationModel;
import com.backend.repository.ConversationRepository;
import com.backend.repository.CourseRepository;
import com.backend.repository.MessageRepository;
import com.backend.repository.UserRepository;
import com.backend.service.ConversationService;
import com.backend.entity.User;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ConversationServiceImpl implements ConversationService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ConversationRepository conversationRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public Conversation createConversation(ConversationModel conversationModel) {
        User student = userRepository.findById(conversationModel.getStudentId()).orElseThrow();
        User teacher = userRepository.findById(conversationModel.getTeacherId()).orElseThrow();
        Course course = courseRepository.findById(conversationModel.getCourseId()).orElseThrow();


        Conversation existingConversation = conversationRepository.findByStudentAndTeacherAndCourse(student, teacher, course);

        if (existingConversation != null) {

            return existingConversation;
        } else {

            List<Message> messages = new ArrayList<>();
            Conversation conversation = Conversation.builder()
                    .student(student)
                    .teacher(teacher)
                    .course(course)
                    .messages(messages)
                    .build();

            return conversationRepository.save(conversation);
        }
    }




    public List<Message> getAllMessagesInConversation(Long conversationId) {
        Optional<Conversation> conversationOptional = conversationRepository.findConversationWithMessages(conversationId);

        if (conversationOptional.isPresent()) {
            Conversation conversation = conversationOptional.get();
            List<Message> msgs = messageRepository.findByConversationId(conversationId);
            return msgs;
        } else {
            throw new EntityNotFoundException("Conversation not found with ID: " + conversationId);
        }
    }



    public List<Conversation> getConversationsByTeacherId(Long teacherId) {
        return conversationRepository.findByTeacherId(teacherId);
    }



}
