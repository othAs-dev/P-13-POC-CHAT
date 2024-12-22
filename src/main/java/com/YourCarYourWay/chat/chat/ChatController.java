package com.YourCarYourWay.chat.chat;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

  @MessageMapping("/chat.sendMessage")
  @SendTo("/topic/public")
  public ChatMessage sendMessage(
    @Payload ChatMessage chatMessage,
    SimpMessageHeaderAccessor headerAccessor
  ) {
    String username = (String) headerAccessor.getSessionAttributes().get("username");
    if (username == null) { username = "Anonymous"; }
    chatMessage.setSender(username);
    return chatMessage;
  }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(
            @Payload ChatMessage chatMessage,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
      System.out.println(chatMessage.getSender());
        return chatMessage;
    }
}
