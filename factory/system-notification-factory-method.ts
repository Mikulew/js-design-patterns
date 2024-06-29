interface SystemNotification {
  render(title: string, text: string, thumbnailURL: string): void;
  onClick(callback: Function): void;
  onClosed(callback: Function): void;
}

class WindowsNotification implements SystemNotification {
  render(title: string, text: string, thumbnailURL: string) {
    console.log(`Windows Notification displayed with the following information: ${title}`);
    console.log(`Text: ${text}`);
    console.log(`URL: ${thumbnailURL}`);
  }
  onClick(callback: Function): void {
    console.log('Windows Notification clicked');
    callback();
  }
  onClosed(callback: Function): void {
    console.log('Windows Notification closed');
    callback();
  }
}

class MacOSNotification implements SystemNotification {
  render(title: string, text: string, thumbnailURL: string) {
    console.log(`MacOS Notification displayed with the following information: ${title}`);
    console.log(`Text: ${text}`);
    console.log(`URL: ${thumbnailURL}`);
  }
  onClick(callback: Function): void {
    console.log('MacOS Notification clicked');
    callback();
  }
  onClosed(callback: Function): void {
    console.log('MacOS Notification closed');
    callback();
  }
}

class LinuxNotification implements SystemNotification {
  render(title: string, text: string, thumbnailURL: string) {
    console.log(`Linux Notification displayed with the following information: ${title}`);
    console.log(`Text: ${text}`);
    console.log(`URL: ${thumbnailURL}`);
  }
  onClick(callback: Function): void {
    console.log('Linux Notification clicked');
    callback();
  }
  onClosed(callback: Function): void {
    console.log('Linux Notification closed');
    callback();
  }
}

class NotificationCreator {
  createNotification(configuredOS: string): SystemNotification {
    switch (configuredOS) {
      case 'windows':
        return new WindowsNotification();
      case 'masOS':
        return new MacOSNotification();
      case 'linux':
        return new LinuxNotification();
      default:
        return new WindowsNotification();
    }
  }
}

class MainApplication {
  notificationCreator: NotificationCreator;
  private configuredOS = 'windows';
  constructor(notificationFactory: NotificationCreator) {
    this.notificationCreator = notificationFactory;
    this.greetUser();
  }
  private greetUser() {
    let notification: SystemNotification = this.notificationCreator.createNotification(this.configuredOS);
    let title = 'Welcome!';
    let text = 'Let\'s take a tour';
    let thumbnailURL = '../assets/welcome.png';
    notification.render(title, text, thumbnailURL);
  }
}

class ChatService {
  private notificationCreator: NotificationCreator;
  private configuredOS = 'mac';

  constructor(notificationFactory: NotificationCreator) {
    this.notificationCreator = notificationFactory;
  }
  onMessageReceived(sender: string, message: string, avatarURL: string) {
    let notification: SystemNotification = this.notificationCreator.createNotification(this.configuredOS);
    notification.render(sender, message, avatarURL);
  }
}