package com.backend.service;


import com.backend.entity.Conversation;
import com.backend.entity.Message;
import com.backend.model.ConversationModel;

import java.util.List;

public interface ConversationService {

 Conversation createConversation(ConversationModel conversationModel);

    List<Message> getAllMessagesInConversation(Long conversationId);

     Message ajouterMessageAConversation(Long idConversation, String contenuMessage);

}
