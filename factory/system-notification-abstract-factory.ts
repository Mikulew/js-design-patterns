interface Downloader {
  render(progress: number, mediaFiles: string[]);
  cancelDownload(): void;
  pauseDownload(): void;
}

class WindowsDownloader implements Downloader {
  render(progress: number, mediaFiles: string[]) {
    console.log('Windows Downloader opened');
  }
  cancelDownload(): void {
    console.log("Cancelled Downloads");
  }
  pauseDownload(): void {
    console.log("Paused Downloads");
  }
}

class MacOSDownloader implements Downloader {
  render(progress: number, mediaFiles: string[]) {
    console.log('MacOS Downloader opened');
  }
  cancelDownload(): void {
    console.log("Cancelled Downloads");
  }
  pauseDownload(): void {
    console.log("Paused Downloads");
  }   
}

class LinuxDownloader implements Downloader {
  render(progress: number, mediaFiles: string[]) {
    console.log('Linux Downloader opened');
  }
  cancelDownload(): void {
    console.log("Cancelled Downloads");
  }
  pauseDownload(): void {
    console.log("Paused Downloads");
  }
}

interface GUIFactory {
  createNotification: SystemNotification;
  createDownloader: Downloader;
}

class WindowsGUIFactory implements GUIFactory {
  createNotification(): SystemNotification {
    return new WindowsNotification();
  }
  createDownloader(): Downloader {
    return new WindowsDownloader();
  }
}

class MacOSGUIFactory implements GUIFactory {
  createNotification(): SystemNotification {
    return new MacOSNotification();
  }
  createDownloader(): Downloader {
    return new MacOSDownloader();
  }
}

class LinuxGUIFactory implements GUIFactory {
  createNotification(): SystemNotification {
    return new LinuxNotification();
  }
  createDownloader(): Downloader {
    return new LinuxDownloader();
  }
}

class MainApplication {
  private factory: GUIFactory;
  constructor(guiFactory: GUIFactory) {
    this.factory = guiFactory;
    this.greetUser();
  }
  private greetUser() {
    let notification: SystemNotification = this.factory.createNotification();
    let title = 'Welcome!';
    let text = 'Let\'s take a tour';
    let thumbnailURL = '../assets/welcome.png';
    notification.render(title, text, thumbnailURL);
  }
}

let configuredOS = 'windows';
let factory: GUIFactory;
if (configuredOS === 'windows') {
  factory = new WindowsGUIFactory();
} else if (configuredOS === 'macOS') {
  factory = new MacOSGUIFactory();
} else {
  factory = new LinuxGUIFactory();
}

let application = new MainApplication(factory);