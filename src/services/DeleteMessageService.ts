import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

class DeleteMessageService {
  async execute(id: string) {
    const messageRepository = getCustomRepository(MessagesRepository);

    await messageRepository.delete(id);
  }
}

export { DeleteMessageService };
