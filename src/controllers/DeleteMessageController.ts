import { Request, Response } from "express";
import { DeleteMessageService } from "../services/DeleteMessageService";

class DeleteMessageController {
  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteMessageService = new DeleteMessageService();

    await deleteMessageService.execute(id);

    return res.json({ message: "Mensagem excluída com sucesso" });
  };
}

export { DeleteMessageController };
