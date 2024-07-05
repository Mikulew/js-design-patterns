interface IMessageQueueManager {
  add(client: IClient): void;
  remove(client: IClient): void;
  notify(message: string): void;
}

interface IDisplay {
  displayMessage(): void;
}

interface IClient {
  update(message: string): void;
}

class MessageQueueManager implements IMessageQueueManager {
  protected messages: string[] = [];
  protected clients: IClient[] = [];

  add(client: IClient): void {
    this.clients.push(client);
  }

  remove(client: IClient): void {
    const index = this.clients.indexOf(client);
    if (index !== -1) {
      this.clients.splice(index, 1);
    }
  }

  notify(message: string): void {
    if (this.clients.length > 0) {
      this.clients.forEach((client: IClient) => {
        client.update(message);
      });
    }
  }
}

class NoticeBoard implements IClient, IDisplay {
  private messagesToDisplay = "";

  update(message: string): void {
    this.messagesToDisplay = message;
    this.displayMessage();
  }

  displayMessage(): void {
    console.log(this.messagesToDisplay);
  }
}

class NotificationPanel implements IClient, IDisplay {
  private messagesToDisplay = "";

  update(message: string): void {
    this.messagesToDisplay = message;
    this.displayMessage();
  }

  displayMessage(): void {
    console.log(`Notification Panel: ${this.messagesToDisplay}`);
  }
}

// Initialize MessageQueueManager as the subject
const messageQueueManager = new MessageQueueManager();

// Create instances of NoticeBoard and NotificationPanel as observers
const noticeBoard1: NoticeBoard = new NoticeBoard();
const noticeBoard2: NoticeBoard = new NoticeBoard();
const notificationPanel: NotificationPanel = new NotificationPanel();

// Register observers with MessageQueueManager
messageQueueManager.add(noticeBoard1);
messageQueueManager.add(noticeBoard2);
messageQueueManager.add(notificationPanel);

// Trigger a message notification to all observers
messageQueueManager.notify('Message for all boards');
/*
 * // OUTPUT:
 * Message for all boards
 * Message for all boards
 * Notification Panel: Message for all boards
 */