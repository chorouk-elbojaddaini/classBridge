package com.backend.model;

import com.backend.entity.Message;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ConversationModel {

        private Long studentId;
        private Long teacherId;
        private Long courseId;

        private List<Message> messages;
}
