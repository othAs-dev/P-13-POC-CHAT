package com.YourCarYourWay.chat.chat;

import lombok.*;

@Data
@Builder
public class ChatMessage {

    private MessageType type;
    private String content;
    private String sender;

}
