package com.backend.serviceImpl;

import com.backend.entity.Conversation;
import com.backend.entity.Message;
import com.backend.repository.ConversationRepository;
import com.backend.repository.MessageRepository;
import com.backend.service.MessageService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class MessageServiceImpl implements MessageService {

   @Autowired
   private MessageRepository messageRepository;

   @Autowired
   private ConversationRepository conversationRepository;
    @Override
    public Message ajouterMessageAConversation(Message message) {

        Conversation conversation = conversationRepository.findById(message.getConversation().getIdConversation())
                .orElseThrow(() -> new EntityNotFoundException("Conversation not found with ID: " + message.getConversation().getIdConversation()));


        Message nouveauMessage = Message.builder()
                .senderEmail(message.getSenderEmail())
                .date(new Date())
                .content(message.getContent())
                .build();


        nouveauMessage.setConversation(conversation);


        messageRepository.save(nouveauMessage);

        return nouveauMessage;
    }
}
