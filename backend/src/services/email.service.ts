import nodemailer from 'nodemailer';
import { Booking, ContactMessage } from '@prisma/client';

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
    // Configure email transporter
    const config: EmailConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    };

    this.transporter = nodemailer.createTransport(config);
  }

  // Send booking confirmation to customer
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

  // Send booking notification to admin
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

  // Send contact message confirmation to customer
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

  // Send contact message to admin
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

  // Template for customer booking confirmation
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
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #8B5CF6; }
          .info-row { display: flex; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
          .info-label { font-weight: bold; width: 150px; color: #6B7280; }
          .info-value { flex: 1; color: #1F2937; }
          .footer { text-align: center; padding: 20px; color: #6B7280; font-size: 14px; }
          .button { display: inline-block; padding: 12px 30px; background: #8B5CF6; color: white; text-decoration: none; border-radius: 6px; margin: 10px 0; }
          .warning { background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 6px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Rezerwacja Potwierdzona</h1>
            <p>Dziękujemy za zaufanie!</p>
          </div>
          <div class="content">
            <p>Cześć <strong>${booking.name}</strong>,</p>
            <p>Twoja rezerwacja została przyjęta. Szczegóły poniżej:</p>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #8B5CF6;">📋 Szczegóły rezerwacji</h3>
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
                <span class="info-value">${booking.deviceType} - ${booking.deviceBrand} ${booking.deviceModel || ''}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Preferowana data:</span>
                <span class="info-value">${date} o ${booking.preferredTime}</span>
              </div>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #8B5CF6;">📝 Opis problemu</h3>
              <p style="margin: 0;">${booking.problemDescription}</p>
            </div>

            <div class="warning">
              <strong>⏰ Co dalej?</strong><br>
              Skontaktujemy się z Tobą w ciągu <strong>24 godzin</strong>, aby potwierdzić termin i dostarczyć szczegóły dotyczące wizyty.
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+48789710406" class="button">📞 Zadzwoń: 789-710-406</a>
            </div>

            <p><strong>Ważne przed wizytą:</strong></p>
            <ul>
              <li>📦 Przygotuj urządzenie do naprawy</li>
              <li>💾 Wykonaj kopię zapasową ważnych danych</li>
              <li>🔑 Przygotuj hasła dostępowe (jeśli potrzebne)</li>
              <li>📄 Zabierz dowód zakupu (jeśli gwarancja)</li>
            </ul>
          </div>
          <div class="footer">
            <p><strong>LuzeN - Serwis Komputerowy</strong></p>
            <p>ul. Topolowa 74, 43-227 Góra</p>
            <p>📧 kontakt@luzen.pl | 📞 789-710-406</p>
            <p style="font-size: 12px; color: #9CA3AF; margin-top: 20px;">
              Ta wiadomość została wygenerowana automatycznie. Prosimy nie odpowiadać na ten email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Template for admin booking notification
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
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f3f4f6; }
          .container { max-width: 700px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .alert { background: #FEE2E2; border-left: 4px solid #DC2626; padding: 15px; margin: 20px 0; border-radius: 6px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .info-card { background: #F9FAFB; padding: 15px; border-radius: 8px; border: 1px solid #E5E7EB; }
          .info-label { font-size: 12px; color: #6B7280; text-transform: uppercase; margin-bottom: 5px; }
          .info-value { font-size: 16px; font-weight: bold; color: #1F2937; }
          .problem-box { background: #FEF3C7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F59E0B; }
          .action-buttons { display: flex; gap: 10px; margin: 30px 0; }
          .button { flex: 1; padding: 12px; text-align: center; text-decoration: none; border-radius: 8px; font-weight: bold; }
          .button-primary { background: #8B5CF6; color: white; }
          .button-secondary { background: #E5E7EB; color: #374151; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 NOWA REZERWACJA</h1>
            <p style="font-size: 18px; margin: 10px 0;">Zlecenie #${booking.id.substring(0, 8).toUpperCase()}</p>
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
                <div class="info-value"><a href="tel:${booking.phone}" style="color: #8B5CF6;">${booking.phone}</a></div>
              </div>
              <div class="info-card">
                <div class="info-label">Email</div>
                <div class="info-value"><a href="mailto:${booking.email}" style="color: #8B5CF6;">${booking.email}</a></div>
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
                <div class="info-value">${booking.deviceBrand}</div>
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

            <div class="action-buttons">
              <a href="tel:${booking.phone}" class="button button-primary">📞 Zadzwoń do klienta</a>
              <a href="mailto:${booking.email}" class="button button-secondary">📧 Wyślij email</a>
            </div>

            <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; font-size: 14px; color: #6B7280;">
                <strong>Status:</strong> ${booking.status}<br>
                <strong>Data utworzenia:</strong> ${new Date(booking.createdAt).toLocaleString('pl-PL')}<br>
                <strong>ID rezerwacji:</strong> ${booking.id}
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Template for contact confirmation
  private getContactConfirmationTemplate(message: ContactMessage): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; padding: 20px; color: #6B7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Otrzymaliśmy Twoją wiadomość</h1>
          </div>
          <div class="content">
            <p>Cześć <strong>${message.name}</strong>,</p>
            <p>Dziękujemy za kontakt. Twoja wiadomość została dostarczona i odpowiemy w ciągu <strong>24 godzin</strong>.</p>
            
            <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #8B5CF6;">
              <p><strong>Temat:</strong> ${message.subject}</p>
              <p><strong>Twoja wiadomość:</strong></p>
              <p style="white-space: pre-wrap; color: #6B7280;">${message.message}</p>
            </div>

            <p>W razie pilnych spraw zapraszamy do kontaktu telefonicznego:</p>
            <p style="text-align: center;">
              <a href="tel:+48789710406" style="display: inline-block; padding: 12px 30px; background: #8B5CF6; color: white; text-decoration: none; border-radius: 6px; margin: 10px 0;">
                📞 Zadzwoń: 789-710-406
              </a>
            </p>
          </div>
          <div class="footer">
            <p><strong>LuzeN - Serwis Komputerowy</strong></p>
            <p>📧 kontakt@luzen.pl | 📞 789-710-406</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Template for admin contact notification
  private getAdminContactNotificationTemplate(message: ContactMessage): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 700px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .info-box { background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Nowa wiadomość kontaktowa</h1>
          </div>
          <div class="content">
            <div class="info-box">
              <p><strong>Od:</strong> ${message.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${message.email}">${message.email}</a></p>
              <p><strong>Telefon:</strong> <a href="tel:${message.phone}">${message.phone}</a></p>
              <p><strong>Temat:</strong> ${message.subject}</p>
            </div>

            <div style="background: #FEF3C7; padding: 20px; border-radius: 8px; border-left: 4px solid #F59E0B;">
              <h3 style="margin: 0 0 10px 0;">Treść wiadomości:</h3>
              <p style="white-space: pre-wrap; margin: 0;">${message.message}</p>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${message.email}" style="display: inline-block; padding: 12px 30px; background: #2563EB; color: white; text-decoration: none; border-radius: 6px; margin: 5px;">
                Odpowiedz emailem
              </a>
              <a href="tel:${message.phone}" style="display: inline-block; padding: 12px 30px; background: #059669; color: white; text-decoration: none; border-radius: 6px; margin: 5px;">
                Zadzwoń
              </a>
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

  // Test email connection
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