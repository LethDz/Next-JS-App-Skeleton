import '@ds/common-styles/dist/atoms/Utilities.css';
import '@ds/common-styles/dist/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
