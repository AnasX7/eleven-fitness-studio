import '../index.css';
import { messages } from '../messages';

export const metadata = {
  title: messages.en.Metadata.title,
  description: messages.en.Metadata.description,
  icons: { icon: '/assets/icons/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body id="top">{children}</body>
    </html>
  );
}
