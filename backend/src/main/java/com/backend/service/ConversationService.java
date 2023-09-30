package com.backend.service;


import com.backend.entity.Conversation;
import com.backend.entity.Message;
import com.backend.model.ConversationModel;

import java.util.List;

public interface ConversationService {

 Conversation createConversation(ConversationModel conversationModel);

    List<Message> getAllMessagesInConversation(Long conversationId);

    public List<Conversation> getConversationsByTeacherId(Long teacherId);
    public List<Conversation> getConversationsByStudentId(Long studentId);
}
