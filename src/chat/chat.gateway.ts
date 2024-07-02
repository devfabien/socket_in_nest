import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway(3002, {})
export class ChatGateway {
  @SubscribeMessage("newMessage")
  handleMessage(client: Socket, message: any) {
    client.emit("reply", "This is a reply");
  }
}
