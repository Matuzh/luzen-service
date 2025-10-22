import nodemailer from 'nodemailer';

// Define types directly instead of importing from Prisma
interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  deviceType: string;
  deviceBrand?: string;
  deviceModel?: string;
  problemDescription: string;
  preferredDate: Date | string;
  preferredTime: string;
  status: string;
  createdAt: Date | string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date | string;
}

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const config: EmailConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    };

    this.transporter = nodemailer.createTransport(config);
  }

  async sendBookingConfirmation(booking: Booking): Promise<void> {
    try {
      const mailOptions = {
        from: `"LuzeN Serwis" <${process.env.SMTP_USER}>`,
        to: booking.email,
        subject: '✅ Potwierdzenie rezerwacji - LuzeN',
        html: this.getBookingConfirmationTemplate(booking),
      };

      await this.transporter.sendMail(mailOptions);
      console.log('✅ Booking confirmation email sent to:', booking.email);
    } catch (error) {
      console.error('❌ Failed to send booking confirmation email:', error);
      throw error;
    }
  }

  async sendBookingNotificationToAdmin(booking: Booking): Promise<void> {
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'kontakt@luzen.pl';
      
      const mailOptions = {
        from: `"LuzeN System" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `🔔 Nowa rezerwacja #${booking.id.substring(0, 8)}`,
        html: this.getAdminBookingNotificationTemplate(booking),
      };

      await this.transporter.sendMail(mailOptions);
      console.log('✅ Admin notification email sent');
    } catch (error) {
      console.error('❌ Failed to send admin notification:', error);
      throw error;
    }
  }

  async sendContactConfirmation(message: ContactMessage): Promise<void> {
    try {
      const mailOptions = {
        from: `"LuzeN Serwis" <${process.env.SMTP_USER}>`,
        to: message.email,
        subject: '✅ Otrzymaliśmy Twoją wiadomość - LuzeN',
        html: this.getContactConfirmationTemplate(message),
      };

      await this.transporter.sendMail(mailOptions);
      console.log('✅ Contact confirmation email sent to:', message.email);
    } catch (error) {
      console.error('❌ Failed to send contact confirmation:', error);
      throw error;
    }
  }

  async sendContactNotificationToAdmin(message: ContactMessage): Promise<void> {
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'kontakt@luzen.pl';
      
      const mailOptions = {
        from: `"LuzeN System" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `📧 Nowa wiadomość: ${message.subject}`,
        html: this.getAdminContactNotificationTemplate(message),
        replyTo: message.email,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('✅ Contact notification sent to admin');
    } catch (error) {
      console.error('❌ Failed to send contact notification to admin:', error);
      throw error;
    }
  }

  private getBookingConfirmationTemplate(booking: Booking): string {
    const date = new Date(booking.preferredDate).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f3f4f6; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: white; padding: 40px 30px; text-align: center; }
          .header h1 { margin: 0 0 10px 0; font-size: 28px; }
          .content { padding: 30px; }
          .info-box { background: #f9fafb; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #8B5CF6; }
          .info-row { display: flex; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .info-row:last-child { border-bottom: none; }
          .info-label { font-weight: 600; width: 150px; color: #6B7280; font-size: 14px; }
          .info-value { flex: 1; color: #1F2937; }
          .footer { background: #f9fafb; text-align: center; padding: 30px; color: #6B7280; font-size: 14px; border-top: 1px solid #e5e7eb; }
          .button { display: inline-block; padding: 14px 32px; background: #8B5CF6; color: white; text-decoration: none; border-radius: 8px; margin: 10px 0; font-weight: 600; }
          .warning { background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 16px; margin: 20px 0; border-radius: 6px; }
          @media only screen and (max-width: 600px) {
            .info-row { flex-direction: column; }
            .info-label { width: 100%; margin-bottom: 5px; }
            .content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Rezerwacja Potwierdzona</h1>
            <p style="margin: 0; font-size: 16px;">Dziękujemy za zaufanie!</p>
          </div>
          <div class="content">
            <p style="font-size: 16px;">Cześć <strong>${booking.name}</strong>,</p>
            <p>Twoja rezerwacja została przyjęta. Szczegóły poniżej:</p>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #8B5CF6; font-size: 18px;">📋 Szczegóły rezerwacji</h3>
              <div class="info-row">
                <span class="info-label">Numer rezerwacji:</span>
                <span class="info-value"><strong>#${booking.id.substring(0, 8).toUpperCase()}</strong></span>
              </div>
              <div class="info-row">
                <span class="info-label">Usługa:</span>
                <span class="info-value">${booking.service}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Urządzenie:</span>
                <span class="info-value">${booking.deviceType} - ${booking.deviceBrand || ''} ${booking.deviceModel || ''}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Preferowana data:</span>
                <span class="info-value">${date} o ${booking.preferredTime}</span>
              </div>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #8B5CF6; font-size: 18px;">📝 Opis problemu</h3>
              <p style="margin: 0;">${booking.problemDescription}</p>
            </div>

            <div class="warning">
              <strong>⏰ Co dalej?</strong><br>
              Skontaktujemy się z Tobą w ciągu <strong>24 godzin</strong>, aby potwierdzić termin i dostarczyć szczegóły dotyczące wizyty.
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+48789710406" class="button">📞 Zadzwoń: 789-710-406</a>
            </div>

            <p style="font-size: 15px;"><strong>Ważne przed wizytą:</strong></p>
            <ul style="padding-left: 20px;">
              <li>📦 Przygotuj urządzenie do naprawy</li>
              <li>💾 Wykonaj kopię zapasową ważnych danych</li>
              <li>🔑 Przygotuj hasła dostępowe (jeśli potrzebne)</li>
              <li>📄 Zabierz dowód zakupu (jeśli gwarancja)</li>
            </ul>
          </div>
          <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong>LuzeN - Serwis Komputerowy</strong></p>
            <p style="margin: 5px 0;">ul. Topolowa 74, 43-227 Góra</p>
            <p style="margin: 5px 0;">📧 kontakt@luzen.pl | 📞 +48 789 710 406</p>
            <p style="font-size: 12px; color: #9CA3AF; margin-top: 20px;">
              Ta wiadomość została wygenerowana automatycznie.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getAdminBookingNotificationTemplate(booking: Booking): string {
    const date = new Date(booking.preferredDate).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #f3f4f6; margin: 0; padding: 20px; }
          .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .alert { background: #FEE2E2; border-left: 4px solid #DC2626; padding: 16px; margin: 20px 0; border-radius: 6px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .info-card { background: #F9FAFB; padding: 15px; border-radius: 8px; border: 1px solid #E5E7EB; }
          .info-label { font-size: 11px; color: #6B7280; text-transform: uppercase; margin-bottom: 5px; font-weight: 600; }
          .info-value { font-size: 16px; font-weight: 600; color: #1F2937; }
          .problem-box { background: #FEF3C7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F59E0B; }
          .button { display: inline-block; padding: 12px 24px; text-align: center; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 5px; }
          .button-primary { background: #8B5CF6; color: white; }
          .button-secondary { background: #10B981; color: white; }
          @media only screen and (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0 0 10px 0;">🔔 NOWA REZERWACJA</h1>
            <p style="font-size: 20px; margin: 0;">Zlecenie #${booking.id.substring(0, 8).toUpperCase()}</p>
          </div>
          <div class="content">
            <div class="alert">
              <strong>⚠️ Wymagane działanie!</strong><br>
              Nowa rezerwacja wymaga kontaktu z klientem w ciągu 24 godzin.
            </div>

            <h2 style="color: #8B5CF6; margin-top: 30px;">👤 Dane klienta</h2>
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Imię i nazwisko</div>
                <div class="info-value">${booking.name}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Telefon</div>
                <div class="info-value"><a href="tel:${booking.phone}" style="color: #8B5CF6; text-decoration: none;">${booking.phone}</a></div>
              </div>
              <div class="info-card">
                <div class="info-label">Email</div>
                <div class="info-value"><a href="mailto:${booking.email}" style="color: #8B5CF6; text-decoration: none; word-break: break-all;">${booking.email}</a></div>
              </div>
              <div class="info-card">
                <div class="info-label">Data rezerwacji</div>
                <div class="info-value">${date} ${booking.preferredTime}</div>
              </div>
            </div>

            <h2 style="color: #8B5CF6; margin-top: 30px;">🔧 Szczegóły zlecenia</h2>
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Usługa</div>
                <div class="info-value">${booking.service}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Typ urządzenia</div>
                <div class="info-value">${booking.deviceType}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Marka</div>
                <div class="info-value">${booking.deviceBrand || 'Nie podano'}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Model</div>
                <div class="info-value">${booking.deviceModel || 'Nie podano'}</div>
              </div>
            </div>

            <div class="problem-box">
              <h3 style="margin: 0 0 10px 0; color: #92400E;">📝 Opis problemu:</h3>
              <p style="margin: 0; white-space: pre-wrap;">${booking.problemDescription}</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:${booking.phone}" class="button button-primary">📞 Zadzwoń do klienta</a>
              <a href="mailto:${booking.email}" class="button button-secondary">📧 Wyślij email</a>
            </div>

            <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 14px;">
              <p style="margin: 5px 0;"><strong>Status:</strong> ${booking.status}</p>
              <p style="margin: 5px 0;"><strong>Data utworzenia:</strong> ${new Date(booking.createdAt).toLocaleString('pl-PL')}</p>
              <p style="margin: 5px 0;"><strong>ID rezerwacji:</strong> ${booking.id}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getContactConfirmationTemplate(message: ContactMessage): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f3f4f6; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: white; padding: 40px 30px; text-align: center; }
          .content { padding: 30px; }
          .footer { background: #f9fafb; text-align: center; padding: 30px; color: #6B7280; font-size: 14px; border-top: 1px solid #e5e7eb; }
          .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #8B5CF6; border: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0 0 10px 0;">✅ Otrzymaliśmy Twoją wiadomość</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px;">Cześć <strong>${message.name}</strong>,</p>
            <p>Dziękujemy za kontakt. Twoja wiadomość została dostarczona i odpowiemy w ciągu <strong>24 godzin</strong>.</p>
            
            <div class="message-box">
              <p style="margin: 0 0 10px 0;"><strong>Temat:</strong> ${message.subject}</p>
              <p style="margin: 0 0 10px 0;"><strong>Twoja wiadomość:</strong></p>
              <p style="white-space: pre-wrap; color: #6B7280; margin: 0;">${message.message}</p>
            </div>

            <p>W razie pilnych spraw zapraszamy do kontaktu telefonicznego:</p>
            <p style="text-align: center;">
              <a href="tel:+48789710406" style="display: inline-block; padding: 14px 32px; background: #8B5CF6; color: white; text-decoration: none; border-radius: 8px; margin: 10px 0; font-weight: 600;">
                📞 Zadzwoń: 789-710-406
              </a>
            </p>
          </div>
          <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong>LuzeN - Serwis Komputerowy</strong></p>
            <p style="margin: 5px 0;">📧 kontakt@luzen.pl | 📞 +48 789 710 406</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getAdminContactNotificationTemplate(message: ContactMessage): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background: #f3f4f6; }
          .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .info-box { background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .button { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">📧 Nowa wiadomość kontaktowa</h1>
          </div>
          <div class="content">
            <div class="info-box">
              <p style="margin: 5px 0;"><strong>Od:</strong> ${message.name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${message.email}" style="color: #2563EB;">${message.email}</a></p>
              <p style="margin: 5px 0;"><strong>Telefon:</strong> <a href="tel:${message.phone}" style="color: #2563EB;">${message.phone}</a></p>
              <p style="margin: 5px 0;"><strong>Temat:</strong> ${message.subject}</p>
            </div>

            <div style="background: #FEF3C7; padding: 20px; border-radius: 8px; border-left: 4px solid #F59E0B;">
              <h3 style="margin: 0 0 10px 0;">Treść wiadomości:</h3>
              <p style="white-space: pre-wrap; margin: 0;">${message.message}</p>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${message.email}" class="button" style="background: #2563EB; color: white;">Odpowiedz emailem</a>
              <a href="tel:${message.phone}" class="button" style="background: #059669; color: white;">Zadzwoń</a>
            </div>

            <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 14px; color: #6B7280;">
              <strong>ID wiadomości:</strong> ${message.id}<br>
              <strong>Data otrzymania:</strong> ${new Date(message.createdAt).toLocaleString('pl-PL')}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Email service is ready');
      return true;
    } catch (error) {
      console.error('❌ Email service connection failed:', error);
      return false;
    }
  }
}

export default new EmailService();